export interface Item {
    id: number;
    title: string;
    original_price: number; // original price
    current_price: number; // price after the discount
    discount: number; // percentage
    description: string;
    end_date: string;
    created_at: string;
  }


  export const dealsItems = [
    {
        id: 1,
        title: "",
        original_price: 800,
        current_price: null,
        discount: 10,
        description: "This a description about the item. This a description about the item. ",
        end_date: "2023-01-05",
        created_at: "2022-12-25"
    },
    {
        id: 2,
        title: "",
        original_price: 1000,
        current_price: 750,
        discount: 25,
        description: "This a description about the item. This a description about the item. ",
        end_date: "2023-01-05",
        created_at: "2022-12-24"
    },
    {
        id: 3,
        title: "",
        original_price: 500,
        current_price: null,
        discount: 10,
        description: "This a description about the item. This a description about the item. ",
        end_date: "2023-01-05",
        created_at: "2022-12-23"
    },
    {
        id: 4,
        title: "",
        original_price: 400,
        current_price: 360,
        discount: 10,
        description: "This a description about the item. This a description about the item. ",
        end_date: "2023-01-05",
        created_at: "2022-12-20"
    },
    {
        id: 5,
        title: "",
        original_price: null,
        current_price: 600,
        discount: 50,
        description: "This a description about the item. This a description about the item. ",
        end_date: "2023-01-05",
        created_at: "2022-12-05"
    },
    {
        id: 6,
        title: "",
        original_price: 100,
        discount: 60,
        description: "This a description about the item. This a description about the item. ",
        end_date: "2023-01-05",
        created_at: "2022-11-25"
    }
  ]
  