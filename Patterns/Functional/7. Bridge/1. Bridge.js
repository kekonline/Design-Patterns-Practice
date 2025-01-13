// Implementation: Theme
const lightTheme = () => ({
    getStyle: () => "light theme styles",
});

const darkTheme = () => ({
    getStyle: () => "dark theme styles",
});

// Abstraction: Component
const createComponent = (renderFn, theme) => ({
    render: () => renderFn(theme),
});

// Render Functions
const buttonRenderer = (theme) => `Button rendered with ${theme.getStyle()}`;
const modalRenderer = (theme) => `Modal rendered with ${theme.getStyle()}`;

// Creating Components
const lightButton = createComponent(buttonRenderer, lightTheme());
console.log(lightButton.render()); // "Button rendered with light theme styles"

const darkModal = createComponent(modalRenderer, darkTheme());
console.log(darkModal.render()); // "Modal rendered with dark theme styles"
