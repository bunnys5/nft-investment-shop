export const ProductService = {
  getProductsData() {
      return [
          {
              id: '1000',
              code: 'f230fh0g3',
              name: 'Bamboo Watch',
              description: 'Product Description',
              image: '2.png',
              price: 65,
              category: 'Accessories',
              quantity: 24,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
              id: '1001',
              code: 'f230fh0g3',
              name: 'Bamboo Watch',
              description: 'Product Description',
              image: '../assets/pic/2.png',
              price: 65,
              category: 'Accessories',
              quantity: 24,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
          {
              id: '1000',
              code: 'f230fh0g3',
              name: 'Bamboo Watch',
              description: 'Product Description',
              image: '../assets/pic/2.png',
              price: 65,
              category: 'Accessories',
              quantity: 24,
              inventoryStatus: 'INSTOCK',
              rating: 5
          },
        ]
      },
      getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },
    }