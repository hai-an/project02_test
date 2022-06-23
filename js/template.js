// function template(id, data) {
// 	var str = document.getElementById(id).innerHTML;
// 	var pattern = /{{\s*([a-zA-Z]+)\s*}}/;

// 	var pattResult = null;
// 	while ((pattResult = pattern.exec(str))) {
// 		str = str.replace(pattResult[0], data[pattResult[1]]);
// 	}

// 	return str;
// }
function template(id, data) {
	// 定义字符串
	let str = document.getElementById(id).innerHTML;
	// 定义正则
	let reg = /{{\s*([a-zA-Z]+)\s*}}/;
	// 定义替换结果
	let regRes = null;
	// while循环替换
	while ((regRes = reg.exec(str))) {
		str = str.replace(regRes[0], data[regRes[1]]);
	}
    return str;
}
