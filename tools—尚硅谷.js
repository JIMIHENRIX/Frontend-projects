// 只改动box的部分属性值采用+=的方式
box.className += " b2"; // 在"b2"前后都有一个空格，确保正确的类名拼接

// 添加和检查class属性
function addClass(obj, cn) {
    // 检查obj中是否有cn
    if (!hasClass(obj, cn)) { // 检查是否有属性值cn
        obj.className += " " + cn; // 在已有的class属性后添加一个空格和cn
    }
}

function hasClass(obj, cn) {
    // 判断obj有没有cn class属性
    var reg = new RegExp("\\b" + cn + "\\b"); // 创建正则表达式，匹配整个单词的边界
    return reg.test(obj.className); // 返回是否匹配成功
}

function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b"); // 创建正则表达式，匹配整个单词的边界
    obj.className = obj.className.replace(reg, ""); // 用空字符串替换匹配的class属性
}

function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn); // 如果有该class，则移除
    } else {
        addClass(obj, cn); // 如果没有该class，则添加
    }
}
