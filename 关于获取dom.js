let list1 = document.getElementsByClassName('xxx')
let list2 = document.querySelectorAll('xxx')



// list1  动态   HTMLAllCollection
// list2  静态   NodeList




// `document.getElementsByClassName` 和 `document.querySelectorAll` 是 JavaScript 中用于获取 DOM 元素的两种方法，但它们的行为和返回值有一些重要区别。
// 以下是它们的详细对比：

// ---

// ### 1. **`document.getElementsByClassName`**
// - **语法**：
//   ```javascript
//   let list1 = document.getElementsByClassName('xxx');
//   ```
// - **返回值**：
//   - 返回一个 **`HTMLCollection`**，这是一个动态集合。
// - **特点**：
//   1. **动态更新**：
//      - `HTMLCollection` 是动态的，当 DOM 发生变化时（例如添加或删除元素），集合会自动更新。
//   2. **仅支持类名选择**：
//      - 只能通过类名选择元素，不能使用其他选择器。
//   3. **性能**：
//      - 通常比 `querySelectorAll` 更快，因为它只处理类名。

// #### 示例：
// ```javascript
// let list1 = document.getElementsByClassName('xxx');
// console.log(list1); // HTMLCollection

// // 添加一个新元素
// let newElement = document.createElement('div');
// newElement.className = 'xxx';
// document.body.appendChild(newElement);

// console.log(list1.length); // 自动更新，长度增加
// ```

// ---

// ### 2. **`document.querySelectorAll`**
// - **语法**：
//   ```javascript
//   let list2 = document.querySelectorAll('.xxx');
//   ```
// - **返回值**：
//   - 返回一个 **`NodeList`**，这是一个静态集合。
// - **特点**：
//   1. **静态集合**：
//      - `NodeList` 是静态的，当 DOM 发生变化时，集合不会自动更新。
//   2. **支持复杂选择器**：
//      - 可以使用任何 CSS 选择器（如 `.xxx`、`div.xxx`、`#id` 等）。
//   3. **性能**：
//      - 由于支持复杂选择器，性能可能稍慢于 `getElementsByClassName`。

// #### 示例：
// ```javascript
// let list2 = document.querySelectorAll('.xxx');
// console.log(list2); // NodeList

// // 添加一个新元素
// let newElement = document.createElement('div');
// newElement.className = 'xxx';
// document.body.appendChild(newElement);

// console.log(list2.length); // 不会更新，长度不变
// ```

// ---

// ### 3. **主要区别**

// | 特性                  | `document.getElementsByClassName`          | `document.querySelectorAll`               |
// |-----------------------|--------------------------------------------|-------------------------------------------|
// | **返回值**            | `HTMLCollection`（动态集合）               | `NodeList`（静态集合）                    |
// | **是否动态更新**      | 是                                         | 否                                        |
// | **选择器支持**        | 仅支持类名                                 | 支持所有 CSS 选择器                       |
// | **性能**              | 通常更快                                   | 可能稍慢（支持复杂选择器）                |
// | **遍历方法**          | 可以使用 `for` 循环或 `for...of` 遍历      | 可以使用 `forEach`、`for` 循环或 `for...of` 遍历 |

// ---

// ### 4. **使用场景**
// - **`document.getElementsByClassName`**：
//   - 当你只需要通过类名选择元素，并且希望集合动态更新时。
//   - 示例：实时监控某个类名的元素变化。
// - **`document.querySelectorAll`**：
//   - 当你需要使用复杂的选择器，或者不需要集合动态更新时。
//   - 示例：选择符合特定条件的元素（如 `.xxx` 类名的 `div` 元素）。

// ---

// ### 5. **遍历方法**
// #### `HTMLCollection` 的遍历：
// - 使用 `for` 循环或 `for...of` 遍历。
// - 示例：
//   ```javascript
//   let list1 = document.getElementsByClassName('xxx');
//   for (let i = 0; i < list1.length; i++) {
//     console.log(list1[i]);
//   }
//   ```

// #### `NodeList` 的遍历：
// - 使用 `forEach`、`for` 循环或 `for...of` 遍历。
// - 示例：
//   ```javascript
//   let list2 = document.querySelectorAll('.xxx');
//   list2.forEach(element => {
//     console.log(element);
//   });
//   ```

// ---

// ### 6. **总结**
// - **`document.getElementsByClassName`**：
//   - 返回动态的 `HTMLCollection`，适合需要实时更新的场景。
// - **`document.querySelectorAll`**：
//   - 返回静态的 `NodeList`，支持复杂选择器，适合精确选择元素的场景。

// 根据你的需求选择合适的方法！