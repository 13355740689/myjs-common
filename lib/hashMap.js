/*!
 *~ myjs-common
 *~ Copyright(c) 2019 Answer.AI.L<answer_ljm@163.com>
 *~ MIT Licensed
 */

/**
 * HashMap 容器
 * 
 * @author AnswerALL<answer_ljm@163.com>
 * @template `let map = new HashMap();`
 * @deprecated #Map
 * @description HashMap 容器作废, es5 之后已有 Map 容器
 *
 * */
class HashMap {

    /**
     *~ 构造器
    */
    constructor() {
        this._size = 0;
        this._table = {};
    }

    /**
     * 获取 _table 字段
     * 
     * @returns table
    */
    get table() {
        return this._table;
    }

    /**
     * 获取 _size 字段
     * 
     * @returns size
    */
    get size() {
        return this._size;
    }
    
    /**
     * 往 hashmap 容器中新增一个, 如果已经存在则覆盖
     * 
     * @param key
     * @param value 
    */
    put(key, value) {
        if (!this.containsKey(key)) {
            this._size++;
        }
        this._table[key] = value;
    }

    /**
     * 当容器中不存在 key时往 hashmap 容器中新增一个
     * 
     * @param key
     * @param value 
    */
    putIfAbsent(key, value) {
        if (!this.containsKey(key)) {
            this._size++;
            this._table[key] = value;
        }
    }

    /**
     * 获取 key 对应的 value
     * 
     * @param key
     * @returns value | null
    */
    get(key) {
        let value = this._table[key];
        return (value == undefined) ? null : value;
    }

    /**
     * 获取 hashmap 容器的大小
     * 
     * @returns size
    */
    size() {
        return this._size;
    }

    /**
     * 移除容器中的 key
     * 
     * @param key
     * @returns value | null
    */
    remove(key) {
        let value = this._table[key];
        if (value == undefined) {
           return null;
        } else {
           this._size--;
           delete this._table[key];
           return value;
        }
    }

    /**
     * 判断容器是否为空
     * 
     * @returns true | false
    */
    isEmpty() {
        return (this._size == 0);
    }

    /**
     * 清除容器信息
    */
    clear() {
        this._size = 0;
        this._table = {};
    }

    /**
     * 判断容器中是否存在 key
     * 
     * @param key
     * @returns true | false
    */
    containsKey(key) {
        return (this._table[key] != undefined);
    }

    /**
     * 判断容器中是否存在 value
     * 
     * @param value
     * @returns true | false
    */
    containsValue(value) {
        if (this._size == 0) { return null; }

        for(let key in this._table) {
            if (this._table[key] == value) {
                return true;
            }
        }
        return false;
    }

    /**
     * 获取容器中的 key 列表
     * 
     * @returns keys [array]
    */
    keySet() {
        if (this._size == 0) { return null; }

        let keySet = new Array();
        for(let key in this._table) {
            keySet.push(key);
        }
        return keySet;
    }

    /**
     * 转字符串
     *
     * @returns string 
    */
    toString() {
        return JSON.stringify(this._table);
    }

}

exports = module.exports = {
	HashMap: HashMap
};
