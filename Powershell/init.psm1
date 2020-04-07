Function RunTangentForge {
    ng serve;
}

Function BuildTangentForge {
    DeployTangentForge;
}

Function TestTangentForge {
    npm test;
}

Function DeployTangentForge {
    ng build --configuration=ghpages;
    angular-cli-ghpages;
}
Function OpenTangentForge {
    code TangentForge.code-workspace;
}

Write-Host -ForegroundColor Green "Loaded TangentForge Init Successfully"