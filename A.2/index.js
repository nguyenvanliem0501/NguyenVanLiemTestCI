console.log("Viết hàm nhận vào 2 chuỗi s1 và s2, trả về đầu ra là một chuỗi mới chứa các kí tự xe kẽ cùng vị trí vị trí của 2 chuỗi với nhau");
function merge2String(str1, str2){
    let s1 = str1.split("");
    let s2 = str2.split("");
    let finalStr = "";
    if(s1.length = s2.length){
        for (let index = 0; index < s1.length; index++) {
            finalStr += s1[index] + s2[index];   
        }
    } 
    else if(s1.length > s2.length){
        for (let index = 0; index < s1.length; index++) {
            if(index < s2.length){
                finalStr += s1[index] + s2[index];
            }else{
                finalStr += s1[index];
            }
            
        }
    }
    else if(s1.length < s2.length){
        for (let index = 0; index < s2.length; index++) {
            if(index < s1.length){
                finalStr += s1[index] + s2[index];
            }else{
                finalStr += s2[index];
            }
            
        }
    }
    console.log(finalStr);
}
merge2String("abc", "123");
merge2String("abc", "0123");
merge2String("abcd", "123");
