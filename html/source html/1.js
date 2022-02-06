// Vòng Lặp đệ quy
document.write('What is your name?\n ')
document.write('My name is Tuong')// in ra màn hình
function loop(start, end, cb)
{
    if (start < end)
    {
        cb(start);
        return loop(start + 1, end, cb);//duyệt mảng 
// nếu + 0 thì lặp lại phần tử đầu tiên nằm trong mảng
    }
}
//chạy các phần tử Trong mảng array = ['java', 'php', 'ruby', 'python', 'c++'];
// mỗi Phần tử lặp 1 lần
var array = ['c', 'c++', 'c#', 'Object-C', 'java', 'php', 'ruby', 'python'];
loop(0, array.length, function(index)// chạy từ 0 = 'c'
{
    console.log(array[index]);
});

function giaithua(num){
    var output = 1;
    for (var i = num; i > 0; i--){
        output = output * i;
    }
    return output;
}
console.log(giaithua(5));

