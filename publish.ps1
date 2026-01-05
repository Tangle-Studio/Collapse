param (
    [switch]$StageOnly,
    [switch]$PushOnly
)

$PublishBranch = "publish"
$SourceBranch = "develop"

Write-Host "--- 붕괴(Collapse) 양자 배포 파이프라인 (Robust) ---" -ForegroundColor Cyan

# 0. Selection
$DoStage = $true
$DoPush = $true
if ($StageOnly) { $DoPush = $false }
if ($PushOnly) { $DoStage = $false }

if ($DoStage) {
    # 1. Clean workspace check
    # Check current branch - must be on develop to start
    $currentBranch = (git branch --show-current).Trim()
    if ($currentBranch -ne "$SourceBranch") {
        Write-Host "[ERROR] 배포 작업은 $SourceBranch 브랜치에서 시작해야 합니다. 현재: $currentBranch" -ForegroundColor Red
        exit
    }

    $status = git status --porcelain
    if ($status) {
        Write-Host "[WARNING] 커밋되지 않은 변경사항이 있습니다. 먼저 커밋해주세요." -ForegroundColor Yellow
        exit
    }

    # 2. Switch to Publish Branch
    Write-Host "[1/3] 스테이징 브랜치($PublishBranch)로 전환 중..." -ForegroundColor Green
    git checkout $PublishBranch

    # 3. Wipe and Repopulate (The "Sanitization")
    Write-Host "[2/3] 파일 정제 및 동기화 중 ($SourceBranch -> $PublishBranch)..." -ForegroundColor Green
    
    # Remove all tracked files in publish branch (clean slate)
    git rm -rf . | Out-Null

    # Define public files
    $Files = "index.html", "style.css", "engine.js", "story_data.js", "MANUAL.md", ".gitignore", "src/content"

    foreach ($f in $Files) {
        # Restore from source branch (develop) to current working tree
        git checkout $SourceBranch -- $f
    }

    # Handle README (Reader-centric)
    # Check if README_PUBLIC.md exists in the source branch
    $hasPublicReadme = git ls-tree -r $SourceBranch --name-only | Select-String "README_PUBLIC.md"
    if ($hasPublicReadme) {
        git checkout $SourceBranch -- README_PUBLIC.md
        if (Test-Path "README.md") { Remove-Item "README.md" -Force }
        Rename-Item "README_PUBLIC.md" "README.md" -Force
    }
    else {
        git checkout $SourceBranch -- README.md
    }

    # 4. Commit to Staging
    git add .
    git commit -m "collapse(narrative): official observation log - the reality is actualized" | Out-Null
    
    # Return to develop
    git checkout $SourceBranch
    Write-Host "[3/3] 스테이징 완료. 'git checkout $PublishBranch'에서 정제된 결과물을 확인하세요." -ForegroundColor Cyan
}

if ($DoPush) {
    Write-Host "[PUSH] 공개 저장소로 배포 중..." -ForegroundColor Green
    # Ensure we push the local publish branch to the remote public/main
    git push public publish:main --force
    Write-Host "--- 배포 완료: 관측된 현실이 원격에 확정되었습니다. ---" -ForegroundColor Cyan
}
