
class RandomizedSet {
    constructor() {
        this.value = [];
    }
    insert(val) {
        if (this.value.includes(val)) {
            return false;
        } else {
            this.value.push(val);
            return true;
        }
    }
    remove(val) {
        if (this.value.includes(val)) {
            this.value = this.value.filter(v => v !== val);
            return true;
        } else {
            return false;
        }
    }
    getRandom() {
        let randomIndex = Math.floor(Math.random() * this.value.length);
        return this.value[randomIndex];
    }
}



