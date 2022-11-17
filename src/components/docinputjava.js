function charCount(){
    var element = document.getElementsByClassName("textarea").value.length;
    document.getElementsByClassName("textarea_count").textContent(element+"/100(Max character 100)");
}