// Flyweight Factory for Badge Elements
const BadgeFactory = (() => {
    const badgeCache = {};

    return {
        getBadge: (status) => {
            if (!badgeCache[status]) {
                console.log(`Creating new badge for status: ${status}`);
                // Create a new badge element only if it doesn't exist
                const badge = document.createElement('span');
                badge.className = `badge badge-${status.toLowerCase()}`;
                badge.innerText = status;
                badgeCache[status] = badge;
            }
            return badgeCache[status];
        },
        getBadgeCount: () => Object.keys(badgeCache).length,
    };
})();

// Context: Rendering a table with status badges
const renderRow = (id, status) => {
    const table = document.getElementById('data-table');
    const row = document.createElement('tr');

    // Create ID cell
    const idCell = document.createElement('td');
    idCell.innerText = id;

    // Create Badge cell
    const statusCell = document.createElement('td');
    const badge = BadgeFactory.getBadge(status).cloneNode(true); // Clone for unique placement
    statusCell.appendChild(badge);

    // Append cells to row
    row.appendChild(idCell);
    row.appendChild(statusCell);
    table.appendChild(row);
};

// Example Usage
document.body.innerHTML = '<table id="data-table"></table>';
renderRow(1, 'Active');
renderRow(2, 'Inactive');
renderRow(3, 'Active'); // Reuses the 'Active' badge
renderRow(4, 'Pending');
renderRow(5, 'Inactive'); // Reuses the 'Inactive' badge

console.log(`Total unique badges created: ${BadgeFactory.getBadgeCount()}`);
