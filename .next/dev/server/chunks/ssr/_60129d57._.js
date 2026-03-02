module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/lib/helpers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "debounce",
    ()=>debounce,
    "formatDate",
    ()=>formatDate,
    "formatDateTime",
    ()=>formatDateTime,
    "getInitials",
    ()=>getInitials,
    "throttle",
    ()=>throttle,
    "timeAgo",
    ()=>timeAgo,
    "toAbsoluteUrl",
    ()=>toAbsoluteUrl,
    "uid",
    ()=>uid
]);
const throttle = (func, limit)=>{
    let lastFunc = null;
    let lastRan = null;
    return function(...args) {
        if (lastRan === null) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            if (lastFunc !== null) {
                clearTimeout(lastFunc);
            }
            lastFunc = setTimeout(()=>{
                if (Date.now() - lastRan >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};
function debounce(func, wait) {
    let timeout = null;
    return function(...args) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            func(...args);
        }, wait);
    };
}
function uid() {
    return (Date.now() + Math.floor(Math.random() * 1000)).toString();
}
function getInitials(name, count) {
    if (!name || typeof name !== 'string') {
        return '';
    }
    const initials = name.split(' ').filter(Boolean).map((part)=>part[0].toUpperCase());
    return count && count > 0 ? initials.slice(0, count).join('') : initials.join('');
}
function toAbsoluteUrl(pathname) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH;
    if (baseUrl && baseUrl !== '/') {
        return process.env.NEXT_PUBLIC_BASE_PATH + pathname;
    } else {
        return pathname;
    }
}
function timeAgo(date) {
    const now = new Date();
    const inputDate = typeof date === 'string' ? new Date(date) : date;
    const diff = Math.floor((now.getTime() - inputDate.getTime()) / 1000);
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minute${Math.floor(diff / 60) > 1 ? 's' : ''} ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) > 1 ? 's' : ''} ago`;
    if (diff < 604800) return `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) > 1 ? 's' : ''} ago`;
    if (diff < 2592000) return `${Math.floor(diff / 604800)} week${Math.floor(diff / 604800) > 1 ? 's' : ''} ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} month${Math.floor(diff / 2592000) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diff / 31536000)} year${Math.floor(diff / 31536000) > 1 ? 's' : ''} ago`;
}
function formatDate(input) {
    const date = new Date(input);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
function formatDateTime(input) {
    const date = new Date(input);
    return date.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}
}),
"[project]/hooks/use-mobile.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const MOBILE_BREAKPOINT = 1024;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener('change', onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/hooks/use-scroll-position.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollPosition",
    ()=>useScrollPosition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useScrollPosition({ targetRef } = {}) {
    const [scrollPosition, setScrollPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // If the ref is not provided or its current value is null, fall back to document
        const target = targetRef?.current || document;
        const scrollable = target === document ? window : target;
        const updatePosition = ()=>{
            // Determine if we're scrolling the document or a specific element
            const scrollY = target === document ? window.scrollY : target.scrollTop;
            setScrollPosition(scrollY);
        };
        scrollable.addEventListener('scroll', updatePosition);
        // Set the initial position
        updatePosition();
        return ()=>{
            scrollable.removeEventListener('scroll', updatePosition);
        };
    }, [
        targetRef
    ]);
    return scrollPosition;
}
}),
"[project]/hooks/use-menu.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMenu",
    ()=>useMenu
]);
const useMenu = (pathname)=>{
    const isActive = (path)=>{
        if (path && path === '/') {
            return path === pathname;
        } else {
            return !!path && pathname.startsWith(path);
        }
    };
    const hasActiveChild = (children)=>{
        if (!children || !Array.isArray(children)) return false;
        return children.some((child)=>child.path && isActive(child.path) || child.children && hasActiveChild(child.children));
    };
    const isItemActive = (item)=>{
        return (item.path ? isActive(item.path) : false) || (item.children ? hasActiveChild(item.children) : false);
    };
    const getCurrentItem = (items)=>{
        for (const item of items){
            if (item.path && isActive(item.path)) {
                if (item.children && item.children.length > 0) {
                    const childMatch = getCurrentItem(item.children);
                    return childMatch || item;
                }
                return item;
            }
            if (item.children && item.children.length > 0) {
                const childMatch = getCurrentItem(item.children);
                if (childMatch) {
                    return childMatch;
                }
            }
        }
        return undefined;
    };
    const getBreadcrumb = (items)=>{
        const findBreadcrumb = (nodes, breadcrumb = [])=>{
            for (const item of nodes){
                const currentBreadcrumb = [
                    ...breadcrumb,
                    item
                ];
                // Check if this item is active
                if (item.path && isActive(item.path)) {
                    return currentBreadcrumb; // Return the breadcrumb up to this point
                }
                // If item has children, recurse and check them
                if (item.children && item.children.length > 0) {
                    const childBreadcrumb = findBreadcrumb(item.children, currentBreadcrumb);
                    if (childBreadcrumb.length > currentBreadcrumb.length) {
                        return childBreadcrumb; // Return the deeper breadcrumb if found
                    }
                }
            }
            return breadcrumb; // Return current breadcrumb if no match found
        };
        const breadcrumb = findBreadcrumb(items);
        return breadcrumb.length > 0 ? breadcrumb : [];
    };
    const getChildren = (items, level)=>{
        const hasActiveChildAtLevel = (items)=>{
            for (const item of items){
                if (item.path && (item.path === pathname || item.path !== '/' && item.path !== '' && pathname.startsWith(item.path)) || item.children && hasActiveChildAtLevel(item.children)) {
                    return true;
                }
            }
            return false;
        };
        const findChildren = (items, targetLevel, currentLevel = 0)=>{
            for (const item of items){
                if (item.children) {
                    if (targetLevel === currentLevel && hasActiveChildAtLevel(item.children)) {
                        return item.children;
                    }
                    const children = findChildren(item.children, targetLevel, currentLevel + 1);
                    if (children) {
                        return children;
                    }
                } else if (targetLevel === currentLevel && item.path && (item.path === pathname || item.path !== '/' && item.path !== '' && pathname.startsWith(item.path))) {
                    return items;
                }
            }
            return null;
        };
        return findChildren(items, level);
    };
    return {
        isActive,
        hasActiveChild,
        isItemActive,
        getCurrentItem,
        getBreadcrumb,
        getChildren
    };
};
}),
"[project]/config/general.config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generalSettings",
    ()=>generalSettings
]);
const generalSettings = {
    purchaseLink: 'https://1.envato.market/Vm7VRE',
    docsLink: '',
    licenseLink: '',
    devsLink: 'https://devs.keenthemes.com',
    faqLink: 'https://keenthemes.com/metronic',
    aboutLink: 'https://keenthemes.com/metronic'
};
;
}),
];

//# sourceMappingURL=_60129d57._.js.map