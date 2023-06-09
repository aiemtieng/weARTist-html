function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "สวัสดีค่ะ") {
        return "ติดต่อสอบถามเรื่องอะไรดีคะ";
    } else if (input == "ขอบคุณค่ะ") {
        return "ยินดีค่ะ";
    } else if (input == "อยากสอบถามเรื่องการจ้างcommissionวาดรูปค่ะ") {
        return "ค่ะ สามารถสอบถามได้เลยค่ะ";
    }else if(input == "ราคาเป็นยังไงหรอคะ"){
        return "ภาพแบบครึ่งตัว 200 บาท เต็มตัว 500 บาทค่ะ"
    }else if(input == "ฉันสนใจจ้างราคาครึ่งตัวค่ะ") {
        return "โอเคค่ะ รับงานนะคะ ได้งานประมาณอาทิตย์หน้านะคะ"
    }else{
        return "error"
    }
}