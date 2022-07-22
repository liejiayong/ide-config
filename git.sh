#!/bin/bash

# 禁止git自动将lf转换成crlf
git config --global core.autocrlf false

declare -A site
site["git"]="https://github.com/liejiayong/tw-world.git"
site["gitee"]="https://gitee.com/liejiayong/.git"
site["gitlab"]="git@gitlab.tanwan.com:qianduan/.git"

# remote
git remote add gitee
git remote add git https://github.com/liejiayong/tw-world.git
git remote add gitlab git@gitlab.tanwan.com:qianduan/tw-world.git
git remote set-url --add gitee https://github.com/liejiayong/tw-world.git
git remote set-url --add gitee git@gitlab.tanwan.com:qianduan/tw-world.git
