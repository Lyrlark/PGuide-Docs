import {defineThemeConfig} from 'vuepress-theme-plume'
import {navbar} from './navbar'
import notes from './notes'
import {SpeedInsights} from '@vercel/speed-insights/vue'
// import fetch from 'node-fetch';
// import fs from 'fs';


// async function fetchCommits() {
//   const res = await fetch('https://api.github.com/repos/Lyrlark/PGuide-Docs/commits?sha=master');
//   const commits = await res.json();
//   return commits.map(c => `commit id:"${c.sha.slice(0,7)}" tag:"${c.commit.message.split('\n')[0]}"`).join('\n');
// }
//
// async function updateGitGraph() {
//   const graph = await fetchCommits();
//   let md = fs.readFileSync('docs/notes/begin.md', 'utf-8');
//   md = md.replace(/```git-graph[\s\S]*?```/, '```git-graph\n' + graph + '\n```');
//   fs.writeFileSync('docs/notes/begin.md', md);
// }
//
// updateGitGraph();

// 首页异步检查各服务在线状态
// async function checkStatus() {
//     try {
//         const response = await fetch('https://status.cqmu.online/api/badge/14/status');
//         if (response.ok) {
//             const svgText = await response.text();
//             if (svgText.includes('Status: Up')) {
//                 return '所有服务均在线';
//             }
//         }
//         return '部分服务离线（此处待维护）';
//     } catch (error) {
//         console.error('Error fetching status:', error);
//         return '服务离线';
//     }
// }
//
// // 返回信息
//
// async function getFooterMessage() {
//     const statusMessage = await checkStatus();
//     return `${statusMessage} <a href="https://status.cqmu.online/" target="_blank"><img src="https://status.cqmu.online/api/badge/14/status?style=plastic" alt="Status Badge" style="vertical-align: middle; display: inline-block;"></a>`;
// }


/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: '/icon/logo.svg',
    appearance: true,  // 配置 深色模式

    social: [
        {icon: 'github', link: 'https://github.com/Lyrlark/PGuide-Docs'},
        {icon: 'gitlab', link: 'https://git.cqmu.edu.cn'},
        {icon: 'qq', link: 'https://qm.qq.com/q/Ur5Q6kyTsG'},
        {icon: 'npm', link: 'https://www.npmjs.com/package/vuepress-theme-plume'},
    ],
    navbarSocialInclude: ['github', 'qq', 'gitlab', 'npm'], // 允许显示在导航栏的 social 社交链接
    aside: true, // 页内侧边栏， 默认显示在右侧
    outline: [2, 6], // 页内大纲， 默认显示 h2, h3

    /**
     * 文章版权信息
     * @see https://theme-plume.vuejs.press/guide/features/copyright/
     */
    // copyright: true,

    // prevPage: true,   // 是否启用上一页链接
    // nextPage: true,   // 是否启用下一页链接
    // createTime: true, // 是否显示文章创建时间

    /* 站点页脚，message显示在线情况 */
    footer: {
        message: '<a href="https://docs.pguide.cloud" target="_blank" style="transition: all 0.3s ease; display: inline-block; background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #ff6b6b); background-size: 200% 100%; animation: moveGradient 3s infinite linear; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; position: relative;" onmouseover="this.style.transform=\'scale(1.1)\'; this.style.animationDuration=\'1s\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.animationDuration=\'3s\'">国内镜像站点</a> | <a href="https://docs.pguide.studio" target="_blank" style="transition: all 0.3s ease; display: inline-block; background: linear-gradient(270deg, #a8e6cf, #3498db, #a8e6cf); background-size: 200% 100%; animation: moveGradient 3s infinite linear; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; position: relative;" onmouseover="this.style.transform=\'scale(1.1)\'; this.style.animationDuration=\'1s\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.animationDuration=\'3s\'">国际主站点</a> | <a href="https://ecosystem.pguide.studio" target="_blank" style="transition: all 0.3s ease; display: inline-block; background: linear-gradient(270deg, #dcd6f7, #424874, #dcd6f7); background-size: 200% 100%; animation: moveGradient 3s infinite linear; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; position: relative;" onmouseover="this.style.transform=\'scale(1.1)\'; this.style.animationDuration=\'1s\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.animationDuration=\'3s\'">项导生态</a><style>@keyframes moveGradient { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; }}</style>',
        copyright: 'PGuide Studio © 2023-2025',
    },
    notFound: {
        code: '啊偶，好像没有这个页面',
        title: '🌌 您探索到了未知领域',
        quote: [
            '"💻 我点故我在，但🔗已不在" —— 赛博笛卡尔',
            '"🕳️ 宇宙最伟大的谜团不是黑洞，而是404的奇点" —— 星际访客日志',
            '"👁️ 当你在凝视404时，404也在凝视你的🔄" —— 尼采的键盘',
            '"🔄 所有的网页终将消逝，正如我们终将成为别人的缓存" —— 二进制佛陀'
        ][Math.floor(Math.random() * 4)],
        linkLabel: '🚀让量子隧穿带你重返现实🌐',
        linkText: '🌠回到已知宇宙 →'
    },
    /**
     * @see https://theme-plume.vuejs.press/config/basic/#profile
     */
    profile: {
        avatar: '/icon/logo.svg',
        name: 'PGuide Docs',
        // description: '项导文档',
        circle: true,
        // location: '',
        // organization: '',
    },

    navbar,
    notes,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
//     bulletin: {
//         layout: 'bottom-right',
//         title: '项导文档更新公告',
//         contentType: 'markdown',
//         content: `\
// **2025-03-17**
// - 添加许多项目文档
// 加入开发组，一起完善文档！
// `,
//     },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    transition: {
        page: true,        // 启用 页面间跳转过渡动画
        postList: true,    // 启用 博客文章列表过渡动画
        appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

})
