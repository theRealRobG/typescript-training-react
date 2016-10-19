export type Config = {
    rows: number,
    columns: number,
    items: Array<Item>
}

export type Item = {
    name: string, 
    price: number, 
    stock: number, 
    position: [number, number]
}

export function getConfig(): Config {
    return {
        rows: 4,
        columns: 3,
        items: [
            { name: 'Mill', price: 2, stock: 3, position: [1, 1] },
            { name: 'Tea', price: 1, stock: 3, position: [2, 2] }
        ]
    }
};