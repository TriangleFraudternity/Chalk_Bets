import React, {useState} from "react";

function GroupsDropdown() {

    // Array of objects containing our group data
    let groups = [
        { label: "TorresHeads", value: "🍎" },
        { label: "Triangle", value: "🍌" },
        { label: "Smeebs", value: "🍊" }
    ];

    // Using state to keep track of what the selected group is
    let [group, setGroup] = useState("⬇️ Select a Group ⬇️");

    // Using this function to update the state of group
    // whenever a new option is selected from the dropdown
    let handleGroupChange = (e) => {
        setGroup(e.target.value);
    };

    return (
        <div className="GroupDropdown">
            {/* Displaying the value of fruit */}
            {group}
            <br />

            {/* Creating our dropdown and passing it the handleFruitChange 
            so that every time a new choice is selected, our fruit state 
            updates and renders an emoji of the fruit.
            */}
            <select onChange={handleGroupChange}> 
                {/* Creating the default / starting option for our dropdown.*/}
                <option value="⬇️ Select a Group ⬇️"> -- Select a fruit -- </option>
                {groups.map((group) => <option key = {group.label} value={group.value}>{group.label}</option>)}
            </select>
        </div>
    );
}

export { GroupsDropdown };