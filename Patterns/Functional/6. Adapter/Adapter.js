// Example API responses
const apiResponse1 = {
    first_name: "John",
    last_name: "Doe",
    user_id: 123,
};

const apiResponse2 = {
    fullName: "Jane Smith",
    id: 456,
};

// Target format
// { id: number, name: string }

// Adapter functions
const adaptApiResponse1 = (data) => ({
    id: data.user_id,
    name: `${data.first_name} ${data.last_name}`,
});

const adaptApiResponse2 = (data) => ({
    id: data.id,
    name: data.fullName,
});

// Universal adapter function
const adaptData = (data, adapter) => adapter(data);

// Example usage
const unifiedData1 = adaptData(apiResponse1, adaptApiResponse1);
const unifiedData2 = adaptData(apiResponse2, adaptApiResponse2);

console.log(unifiedData1); // { id: 123, name: "John Doe" }
console.log(unifiedData2); // { id: 456, name: "Jane Smith" }
