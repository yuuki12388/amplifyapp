/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
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
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
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
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
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
export const createExpenseType = /* GraphQL */ `
  mutation CreateExpenseType(
    $input: CreateExpenseTypeInput!
    $condition: ModelExpenseTypeConditionInput
  ) {
    createExpenseType(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateExpenseType = /* GraphQL */ `
  mutation UpdateExpenseType(
    $input: UpdateExpenseTypeInput!
    $condition: ModelExpenseTypeConditionInput
  ) {
    updateExpenseType(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteExpenseType = /* GraphQL */ `
  mutation DeleteExpenseType(
    $input: DeleteExpenseTypeInput!
    $condition: ModelExpenseTypeConditionInput
  ) {
    deleteExpenseType(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
