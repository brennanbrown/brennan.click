// Array form of src/_data/categories.js, for 11ty pagination (`data:
// "categoryList"`), which needs a plain array rather than a keyed object.
import categories from "./categories.js";

export default Object.values(categories);
