# Linked List
This is a simple JavaScript LinkedList library that provides basic functionalities such as `append`, `prepend`, `insertAt`, `at`, `pop`, `shift`, `removeAt`, `contains`, `find` and `toString`.


## Installation
**1. Clone the repository:**

```
git clone https://github.com/hieuhocit/Linked-List.git
```

**2. Install Dependencies:**

```
npm install
```


## Running Tests
**1. Run the tests:**

```
npm test
```


## Usage in Your Project
You can import `LinkedList` from this library into your project using the `import` syntax.

Example usage:

```
import LinkedList from './path/to/LinkedList';

const list = new LinkedList();

list.append(1);
list.append(2);
list.prepend(0);

console.log(list.toString()); // "(0) -> (1) -> (2) -> null"
```

## Supported Methods
* `append(data):` Adds a node to the end of the list.
* `prepend(data):` Adds a node to the beginning of the list.
* `insertAt(data, index):` Inserts a node at the specified index in the list.
* `at(index):` Returns the node at the given index.
* `pop():` Removes the node at the end of the list.
* `shift():` Removes the node at the start of the list.
* `removeAt(index):` Removes the node at the specified index.
* `contains(data):` Checks if a node containing the specified data exists in the list.
* `find(data):` Returns the index of the node containing the data, or null if not found.
* `toString():` Returns a string representation of the list in the form (data) -> (data) -> ... -> null.

## Author
This project is developed by [@hieuhocit](https://github.com/hieuhocit).
