'use strict';

class StaffList {
    constructor() {
        this.staff = new Map();
    }

    add(name, age) {
        if (age <= 20) {
            throw new Error("Staff member age must be greater than 20");
        }
        this.staff.set(name, age);
    }

    remove(name) {
        if (this.staff.has(name)) {
            this.staff.delete(name);
            return true;
        }
        return false;
    }

    getSize() {
        return this.staff.size;
    }
}

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(input[0]);
const staff = new StaffList();

for (let i = 1; i <= n; i++) {
    const parts = input[i].trim().split(" ");
    const command = parts[0];

    try {
        if (command === "add") {
            const name = parts[1];
            const age = parseInt(parts[2]);
            staff.add(name, age);
        } else if (command === "remove") {
            const name = parts[1];
            console.log(staff.remove(name));
        } else if (command === "getSize") {
            console.log(staff.getSize());
        }
    } catch (e) {
        console.log("Error:", e.message);
    }
}

