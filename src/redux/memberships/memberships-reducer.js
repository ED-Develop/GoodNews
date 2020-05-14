export const TOGGLE_MEMBERSHIP = 'good-news/memberships/TOGGLE_MEMBERSHIP';

const initialState = {
    data: [
        {
            id: 0,
            name: 'memberships.economy',
            price: 'price.economy',
            profits: [
                {quantity: 10, title: 'profits.cake'},
                {quantity: 50, title: 'profits.coffee'},
                {quantity: 20, title: 'profits.apples'},
                {quantity: 'profits.unlimited', title: 'profits.milk'},
            ]
        },
        {
            id: 1,
            name: 'memberships.standard',
            price: 'price.standard',
            profits: [
                {quantity: 10, title: 'profits.cake'},
                {quantity: 50, title: 'profits.coffee'},
                {quantity: 20, title: 'profits.apples'},
                {quantity: 'profits.unlimited', title: 'profits.milk'},
            ]
        },
        {
            id: 2,
            name: 'memberships.business',
            price: 'price.business',
            profits: [
                {quantity: 10, title: 'profits.cake'},
                {quantity: 50, title: 'profits.coffee'},
                {quantity: 20, title: 'profits.apples'},
                {quantity: 'profits.unlimited', title: 'profits.milk'},
            ]
        }
    ]
};

const membershipsReducer = (state = initialState) => state;

// actions
export const toggleMembership = (membership, isActive) => ({type: TOGGLE_MEMBERSHIP, payload: {membership, isActive}});

export default membershipsReducer;
