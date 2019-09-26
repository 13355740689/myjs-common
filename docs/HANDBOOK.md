# handbook

Copyright © 2015 - 2019 Answer/MyJs. All Rights Reserved

&nbsp;

## 工具类

### SimpleDateFormat

日期格式化工具

| 函数定义                                 | 返回值 | 描述                       |
| ---------------------------------------- | ------ | -------------------------- |
| formatNow(format: string)                | string | 对当前日期进行格式化       |
| formatDate(*date*:Date, *format*:string) | string | 对指定日期`date`进行格式化 |

- 参数 *format* 取值参见： `DATE_FORMATTER`


&nbsp;

### StringUtils

字符串工具类

| 函数定义                                           | 返回值  | 描述                               |
| -------------------------------------------------- | ------- | ---------------------------------- |
| format(*text*:string, *args*:(string \| number)[]) | string  | 字符串格式化， 占位符为: `{}`      |
| startWith(*str*:string, *prefix*: string)          | boolean | 字符串`str`是否以 `prefix` 开头    |
| endWith(*str*:string, *suffix*: string)            | boolean | 字符串`str`是否以 `suffix`结尾     |
| lastEndChar(*str*: string, *count*?: number)       | string  | 返回字符串`str`指定后`count`个字符 |



&nbsp;

### DateUtils

日期工具类

| 函数定义                                             | 返回值                      | 描述                                             |
| ---------------------------------------------------- | --------------------------- | ------------------------------------------------ |
| addYears(*date*: Date, *years*: number)              | Date \| null \| undefined   | 获取日期`date`前后`years`年的日期                |
| addMonths(*date*: Date, *months*: number)            | Date \| null \|undefined    | 获取日期`date*前后`months`月的日期               |
| addDays(*date*: Date, *days*: number)                | Date \| null \| undefined   | 获取日期`date`前后`days`天的日期                 |
| addHours(*date*: Date, *hours*: number)              | Date \| null \| undefined   | 获取日期`date`前后`hours`时的日期                |
| addMinutes(*date*: Date, *minutes*: number)          | Date \| null \| undefined   | 获取日期`date`前后`minutes`分的日期              |
| addSeconds(*date*: Date, *seconds*: number)          | Date \| null \| undefined   | 获取日期`date`前后`seconds`秒的日期              |
| addMilliseconds(*date*: Date, *millseconds*: number) | Date \| null \| undefined   | 获取日期`date`前后`milliseconds`毫秒的日期       |
| before(*date1*: Date, *date2*: Date)                 | boolean \| undefined        | 判断指定日期`date1`是否在`date2`之前             |
| after(*date1*: Date, *date2*: Date)                  | boolean \| undefined        | 判断指定日期`date1`是否在`date2`之后             |
| diff(*date1*: Date, *date2*: Date, *type*?: number)  | number \| null \| undefined | 获取日期`date1 和 date2`的时间差值, 默认天数差值 |
|                                                      |                             |                                                  |

- *diff()* 函数参数 *type* 取值参见： `DATE_ENUM`



&nbsp;

## 新增类型

### MyDate

新增日期类型： 包含已有 Date() 类型的所有函数， 增加对日期计算以及格式化的支持

| 函数定义                              | 返回值                     | 描述                                                       |
| ------------------------------------- | -------------------------- | ---------------------------------------------------------- |
| add(*amount*: number, *prop*: string) | MyDate \| null             | 获取当前日期时间前后`amount`(年/月/日/时(默认)/分/秒/毫秒)的日期 |
| diff(*date*: Date, *prop*: number)    | nuber \| undefined \| null | 获取当前实例和`date`的时间差值, 默认天数                   |
| prev(*date*: Date)                    | boolean \| undefined       | 判断当前实例是否在指定日期`date`之前                       |
| after(*date*: Date)                   | boolean \| undefined       | 判断当前实例是否在指定日期`date`之后                       |
| format(*pattern*: string)             | string                     | 格式化当前实例日期                                         |
| Date().*                              | -                          | `MyDate 类型中 包括 Date 类型的所有函数`                   |

- *add()* 函数参数 *prop* 取值参见： `DATE_PROP_TYPE`
- *diff()* 函数参数 *prop* 取值参见： `DATE_ENUM`
- *format()* 函数参数 *pattern* 取值参见： `DATE_FORMATTER`


&nbsp;

### MyMap & HashMap

一个 K-V 映射数据结构容器类型

| 函数定义                                         | 返回值               | 描述                                       |
| ------------------------------------------------ | -------------------- | ------------------------------------------ |
| put(*key*:string \| number, *value*:any)         | void                 | 往容器中新增一个元素, `如果已经存在则覆盖` |
| putIfAbsent(*key*:string \| number, *value*:any) | void                 | 当容器中不存在 key 时往容器中新增一个元素  |
| get(*key*:string \| number)                      | any                  | 获取容器内 key 对应的 value                |
| size()                                           | number               | 获取容器内已有元素的个数                   |
| remove(*key*: number \| string)                  | string \| null       | 移除容器内的key                            |
| isEmpty()                                        | boolean              | 判断容器是否为空                           |
| clear()                                          | void                 | 清空容器内容                               |
| containsKey(*key*: string \| number)             | boolean              | 判断容器中是否存在 key                     |
| containsValue(*value*:any)                       | boolean              | 判断容器中是否存在 value                   |
| keySet()                                         | (string \| number)[] | 获取容器中的 key 列表                      |
| toString()                                       | string               | 容器内信息转 json 字符串                   |

> `注意:`  HashMap 在 1.0.0 版本之后废弃

&nbsp;

### MyString

新增字符串类型： 包含已有 String() 类型的所有函数， 增加对字符串格式化左补/右补等功能的支持

| 函数定义                                        | 返回值   | 描述                                           |
| ----------------------------------------------- | -------- | ---------------------------------------------- |
| lpad(padStr: string, length: number)            | string   | 字符串个数不足`length`时左补`padStr`           |
| rpad(padStr: string, length: number)            | string   | 字符串个数不足`length`时右补`padStr`           |
| format(args: [])                                | string   | 格式化字符串， 占位符为: `{}`                  |
| contains(searchString: string)                  | boolean  | 对象值是否包含`searchString`                   |
| replaceAll(substr :string, replacement: string) | string   | 把对象值中的 `substr` 全部替换为 `replacement` |
| startWith(searchString: string)                 | boolean  | 对象值是否以`searchString`开头                 |
| endWith(searchString: string)                   | boolean  | 对象值是否以`searchString`结尾                 |
| append(str: string)                             | MyString | 往对象值后追加`str`                            |
| preppend(str: string)                           | MyString | 往对象值前追加`str`                            |
| String().*                                      | -        | `MyString 类型中 包括 String 类型的所有函数`   |


&nbsp;

## 常量枚举

### DATE_ENUM

- **DATE_ENUM.YEAR：** 年
- **DATE_ENUM.MONTH：** 月
- **DATE_ENUM.DAY：** 日
- **DATE_ENUM.HOUR：** 时
- **DATE_ENUM.MINUTE：** 分
- **DATE_ENUM.SECONDS：** 秒
- **DATE_ENUM.MILLISECONDS：** 毫秒


&nbsp;

###  DATE_FORMATTER

- **DATE_FORMATTER.YEAR_FORMAT：** yyyy
- **DATE_FORMATTER.MONTH_FORMAT：** yyyy-MM
- **DATE_FORMATTER.DATE_FORMAT：** yyyy-MM-dd
- **DATE_FORMATTER.HOUR_FORMAT：** yyyy-MM-dd HH
- **DATE_FORMATTER.MINUTE_FORMAT：** yyyy-MM-dd HH:mm
- **DATE_FORMATTER.SECONDS_FORMAT：** yyyy-MM-dd HH:mm:ss
- **DATE_FORMATTER.DATETIME_FORMAT：** yyyy-MM-dd HH:mm:ss.S