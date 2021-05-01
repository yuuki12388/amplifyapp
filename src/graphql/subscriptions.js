/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExpenseType = /* GraphQL */ `
  subscription OnCreateExpenseType {
    onCreateExpenseType {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExpenseType = /* GraphQL */ `
  subscription OnUpdateExpenseType {
    onUpdateExpenseType {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExpenseType = /* GraphQL */ `
  subscription OnDeleteExpenseType {
    onDeleteExpenseType {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense {
    onCreateExpense {
      id
      name
      description
      topics {
        items {
          id
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense {
    onUpdateExpense {
      id
      name
      description
      topics {
        items {
          id
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense {
    onDeleteExpense {
      id
      name
      description
      topics {
        items {
          id
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
