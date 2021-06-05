/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
      id
      name
      description
      expenseTypeId
      expenseType {
        id
        name
        description
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        expenseTypeId
        expenseType {
          id
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExpenseType = /* GraphQL */ `
  query GetExpenseType($id: ID!) {
    getExpenseType(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listExpenseTypes = /* GraphQL */ `
  query ListExpenseTypes(
    $filter: ModelExpenseTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenseTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
