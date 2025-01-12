// Functional Builder Pattern Example

// Step 1: Initialize an empty profile object
const createProfile = () => ({
    name: "",
    email: "",
    age: null,
    address: "",
    preferences: []
});

// Step 2: Create functions to modify specific fields
const setName = (profile, name) => ({
    ...profile,
    name
});

const setEmail = (profile, email) => ({
    ...profile,
    email
});

const setAge = (profile, age) => ({
    ...profile,
    age
});

const setAddress = (profile, address) => ({
    ...profile,
    address
});

const setPreferences = (profile, preferences) => ({
    ...profile,
    preferences
});

// Step 3: Compose the builder function
const buildProfile = (name, email, age, address, preferences) => {
    let profile = createProfile();
    profile = setName(profile, name);
    profile = setEmail(profile, email);
    profile = setAge(profile, age);
    profile = setAddress(profile, address);
    profile = setPreferences(profile, preferences);
    return profile;
};

// Usage
const userProfile = buildProfile(
    "John Doe",
    "john.doe@example.com",
    30,
    "123 Main St, City, Country",
    ["dark mode", "email notifications"]
);

console.log(userProfile);
