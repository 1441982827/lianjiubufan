   
   
   
   /**万能时间格式化函数 |emb
     *toString() 表达式解析 “ Y-M-D”="2019-6-8" "h-m-s"="小时 分钟 秒 " 
     * GetTime() 设置时间 传入对象 {y:2019,...}
     * @returns 返回对象，包括时间各个形式，及toString 表达式格式化！
     * console.log(GetTime());
     * console.log(GetTime().toString("y-M-d h:m:s:i", true)); //现在时间
     * console.log(GetTime({y:2017,m:3}).toString("y-M-d h:m:s:i", true));//设置的时间
     */
   function getTime(dateObj) {
        var time = new Date();
       
        if (typeof dateObj ==="object") {
           if("y" in dateObj)  time.setFullYear(dateObj.y)
           if("m" in dateObj)  time.setMonth(dateObj.m - 1)
           if("d" in dateObj)time.setDate(dateObj.d)
           if("w" in dateObj ) time.setDay(dateObj.w)
           if("h" in dateObj)time.setHours(dateObj.h)
           if("mm" in dateObj ) time.setMinutes(dateObj.mm) 
           if("s" in dateObj)time.setSeconds(dateObj.s) 
           if("i" in dateObj ) time.setMilliseconds(dateObj.i)
        }else if (typeof dateObj === "string"){
            return toString(dateObj)
        }
        
        var
            year = time.getFullYear(),
            month = time.getMonth() + 1,
            day = time.getDate(),
            week = time.getDay(),
            hour = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds(),
            msecond = time.getMilliseconds(),
            time_Symbol = time.getTime();
        var week_zh_hans=  "日一二三四五六".charAt(week);

        function expressParse(express, isPad) {
            switch (express) {
                case "Y":
                    return year
                case "y":
                    return year
                case "M":
                    return isPad ? (month < 10 ? "0" + month : month) : month
                case "D":
                    return isPad ? (day < 10 ? "0" + day : day) : day
                case "d":
                    return isPad ? (day < 10 ? "0" + day : day) : day
                case "h":
                    return isPad ? (hour < 10 ? "0" + hour : hour) : hour
                case "H":
                    return isPad ? (hour < 10 ? "0" + hour : hour) : hour
                case "m":
                    return isPad ? (minutes < 10 ? "0" + minutes : minutes) : minutes
                case "s":
                    return isPad ? (seconds < 10 ? "0" + seconds : seconds) : seconds
                case "S":
                    return isPad ? (seconds < 10 ? "0" + seconds : seconds) : seconds
                case "i":
                    var i = msecond;
                    if (i < 10) {
                        i = "00" + i;
                    } else if (i < 99 && i >= 10) {
                        i = "0" + i;
                    }
                    return isPad ? i : msecond
                case "w":
                    return week
                case "W":
                    return week_zh_hans
                default:
                    return express;
            }
        }


         /**
             * emb|目的，希望能格式化字符串
             *时间字符串格式化
             *
             * @param {*} express
             */
         function toString  (express, isPad) {
                var strFormat = "";
                var expressArrays = express.split("");
                for (const i in expressArrays) {
                    strFormat += expressParse(expressArrays[i], isPad);
                }
    
                return strFormat;
            }


        return {
            y: year,
            m: month,
            d: day,
            h: hour,
            mm: minutes,
            s: seconds,
            ms: msecond,
            w: week,
            W:week_zh_hans,
            timeSymbol: time_Symbol,
            timeArrayYMD: [year, month, day],
            timeArrayHMS: [hour, minutes, seconds],
            timeExpressParse: expressParse,
            toString
        }
    }


    export default  getTime