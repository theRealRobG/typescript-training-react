export type Config = {
    rows: number,
    columns: number,
    items: Array<Item>
    codes: Array<string>
}

export type Item = {
    name: string,
    imageUrl: string,
    price: number,
    stock: number,
    position: string,
}

export function getConfig(): Config {
    return {
        rows: 4,
        columns: 3,
        items: [
            { name: 'Milk', price: 2, stock: 4, position: 'BB', imageUrl: "images/can.png" },
            { name: 'Tea', price: 1, stock: 3, position: 'AC', imageUrl: "images/can.png" }
        ],
        codes: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    }
};