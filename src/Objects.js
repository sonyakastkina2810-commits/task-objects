export function personUpdate(person) {
    if (person.gender === 'female') {
        delete person.age;
    } else if (person.gender === 'male') {
        if (!('income' in person)) {
            person.income = 100000;
        }
    }

    return person;
}

export function objectFieldsList(...objects) {
    const fields = new Set();

    objects.forEach((obj) => {
        Object.keys(obj).forEach((key) => fields.add(key));
    });

    return Array.from(fields).sort();
}

function deepClone(value) {
    if (Array.isArray(value)) {
        return value.map(deepClone);
    }

    if (value !== null && typeof value === 'object') {
        const result = {};
        Object.keys(value).forEach((key) => {
            result[key] = deepClone(value[key]);
        });
        return result;
    }

    return value;
}

export function objectClone(obj, count) {
    const clones = [];

    for (let i = 0; i < count; i++) {
        const clone = deepClone(obj);
        clone.id = i;
        clones.push(clone);
    }

    return clones;
}