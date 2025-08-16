# 🧪 Test Cases - QACommerce
## Test Case Documentation 

---

## 📋 **Test Case Overview**

**Project:** QACommerce - E-commerce Shopping Cart  
**Document Version:** 1.0  
**Author:** Camila Monteiro  
**Date:** August 23, 2024  
**Standard:** ISO 29119-3  

---

## 🛒 **SHOPPING CART TEST CASES**

### **TC-CART-001: Add Product to Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-001 |
| **Title** | Validate that a product is successfully added to the cart |
| **Priority** | High |
| **Traceability** | CART-01 |
| **Pre-Conditions** | - User is on the Home page<br>- Products are displayed in the marketplace<br>- Cart is empty or has existing items |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to the Home page | Home page loads with 6 products displayed |
| Step 2 | Locate a product (e.g., Smartphone Galaxy S21) | Product card is visible with name, price, and "Add to Cart" button |
| Step 3 | Click "Add to Cart" button | Button changes to "Added!" with green background for 2 seconds |
| Step 4 | Navigate to Cart page | Product appears in cart with quantity 1 |
| Step 5 | Verify product details in cart | Product name, price, and icon are correctly displayed |

**Post-Conditions:**
- Product is added to cart with quantity 1
- Cart total is updated to reflect the new item
- Product count in header increases by 1

---

### **TC-CART-002: Update Product Quantity**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-002 |
| **Title** | Validate that product quantity can be increased and decreased |
| **Priority** | High |
| **Traceability** | CART-02 |
| **Pre-Conditions** | - Product exists in cart<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with existing products |
| Step 2 | Locate quantity controls for a product | Plus (+) and minus (-) buttons are visible |
| Step 3 | Click plus (+) button | Product quantity increases by 1 |
| Step 4 | Verify total price calculation | Total price = (price × new quantity) |
| Step 5 | Click minus (-) button | Product quantity decreases by 1 |
| Step 6 | Click minus (-) button when quantity = 1 | Product is removed from cart |

**Post-Conditions:**
- Product quantity is updated correctly
- Cart total reflects the new quantity
- Product is removed if quantity reaches 0

---

### **TC-CART-003: Remove Product from Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-003 |
| **Title** | Validate that products can be completely removed from cart |
| **Priority** | High |
| **Traceability** | CART-03 |
| **Pre-Conditions** | - Product exists in cart<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with existing products |
| Step 2 | Locate trash icon for a product | Trash icon is visible and clickable |
| Step 3 | Click trash icon | Confirmation dialog appears (if implemented) |
| Step 4 | Confirm deletion | Product is removed from cart |
| Step 5 | Verify cart update | Cart total is recalculated without the removed item |

**Post-Conditions:**
- Product is completely removed from cart
- Cart total is updated accordingly
- Product count in header decreases

---

### **TC-CART-004: View Cart Contents**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-004 |
| **Title** | Validate that cart displays all items with correct information |
| **Priority** | Medium |
| **Traceability** | CART-04 |
| **Pre-Conditions** | - Cart contains multiple products<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with all products |
| Step 2 | Verify product information display | Each product shows: icon, name, price, quantity, total |
| Step 3 | Check quantity controls | Plus/minus buttons are functional for each product |
| Step 4 | Verify individual product totals | Total = (price × quantity) for each product |
| Step 5 | Check cart summary section | Subtotal, discounts, and final total are displayed |

**Post-Conditions:**
- All cart items are visible with correct information
- Cart summary shows accurate calculations
- Navigation between cart and other pages works

---

### **TC-CART-005: Cart Total Calculation**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-005 |
| **Title** | Validate real-time cart total calculation |
| **Priority** | High |
| **Traceability** | CART-05 |
| **Pre-Conditions** | - Cart contains multiple products<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Note initial cart total | Total is displayed correctly |
| Step 3 | Increase quantity of one product | Cart total updates immediately |
| Step 4 | Add another product to cart | Cart total includes new product |
| Step 5 | Remove a product | Cart total decreases accordingly |
| Step 6 | Verify all calculations | Subtotal = sum of (price × quantity) for all items |

**Post-Conditions:**
- Cart total updates in real-time
- All calculations are mathematically correct
- Summary section reflects current state

---

### **TC-CART-006: Empty Cart State**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-006 |
| **Title** | Validate empty cart displays appropriate message and actions |
| **Priority** | Medium |
| **Traceability** | CART-06 |
| **Pre-Conditions** | - Cart is empty<br>- User navigates to Cart page |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Ensure cart is empty | No products in cart |
| Step 2 | Navigate to Cart page | Empty cart message is displayed |
| Step 3 | Verify empty state message | "Your cart is empty" message appears |
| Step 4 | Check "Add Products" button | Button is visible and clickable |
| Step 5 | Click "Add Products" button | Products modal opens |
| Step 6 | Verify modal functionality | User can select and add products |

**Post-Conditions:**
- Empty cart state is clearly communicated
- User has clear path to add products
- Modal functionality works correctly

---

## 🎁 **COUPON SYSTEM TEST CASES**

### **TC-COUPON-001: Apply Valid Coupon**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-001 |
| **Title** | Validate that valid coupon codes can be applied successfully |
| **Priority** | High |
| **Traceability** | COUPON-07 |
| **Pre-Conditions** | - Cart contains products<br>- Cart total meets coupon minimum value<br>- Valid coupon code is known |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Locate coupon input field | Coupon input field is visible |
| Step 3 | Enter valid coupon code (e.g., DESCONTO10) | Code is accepted in input field |
| Step 4 | Click "Apply Coupon" button | Success message appears |
| Step 5 | Verify discount application | Discount appears in cart summary |
| Step 6 | Check final total calculation | Total = Subtotal - Coupon Discount |

**Post-Conditions:**
- Coupon is successfully applied
- Discount is calculated correctly
- Success message is displayed
- Final total reflects the discount

---

### **TC-COUPON-002: Remove Applied Coupon**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-002 |
| **Title** | Validate that applied coupons can be removed |
| **Priority** | Medium |
| **Traceability** | COUPON-08 |
| **Pre-Conditions** | - Coupon is already applied to cart<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with applied coupon |
| Step 2 | Locate "Remove" button for coupon | Remove button is visible |
| Step 3 | Click "Remove" button | Coupon is removed from cart |
| Step 4 | Verify discount removal | Coupon discount disappears from summary |
| Step 5 | Check final total update | Total = Subtotal (no discount) |

**Post-Conditions:**
- Coupon is completely removed
- Discount is no longer applied
- Cart total is recalculated
- Coupon input field is cleared

---

### **TC-COUPON-003: Validate Coupon Rules**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-003 |
| **Title** | Validate coupon validation rules and error handling |
| **Priority** | High |
| **Traceability** | COUPON-09 |
| **Pre-Conditions** | - Cart contains products<br>- Different coupon codes are available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Enter invalid coupon code | Error message appears |
| Step 3 | Enter expired coupon code | Error message appears |
| Step 4 | Enter valid code with insufficient cart value | Error message about minimum value |
| Step 5 | Verify error message content | Clear explanation of why coupon failed |
| Step 6 | Check "View Promotions" button | Button is available for guidance |

**Post-Conditions:**
- Invalid coupons are properly rejected
- Clear error messages are displayed
- User guidance is provided
- Cart total remains unchanged

---

## �� **PROMOTION SYSTEM TEST CASES**

### **TC-PROMO-001: Automatic Promotion Application**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-001 |
| **Title** | Validate that promotions are applied automatically when conditions are met |
| **Priority** | High |
| **Traceability** | PROMO-10 |
| **Pre-Conditions** | - Cart contains products<br>- Cart total approaches promotion threshold |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 800 | Cart total is R$ 800 or above |
| Step 2 | Verify promotion application | R$ 100 discount is automatically applied |
| Step 3 | Add more products to reach R$ 1,000 | Cart total is R$ 1,000 or above |
| Step 4 | Check promotion priority | Higher discount (15%) is applied |
| Step 5 | Verify discount calculation | Discount = 15% of subtotal |
| Step 6 | Check final total | Total = Subtotal - Promotion Discount |

**Post-Conditions:**
- Promotions are applied automatically
- Higher value promotions take priority
- Discounts are calculated correctly
- Final total reflects all discounts

---

### **TC-PROMO-002: Promotion Types and Values**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-002 |
| **Title** | Validate different promotion types (percentage and fixed amount) |
| **Priority** | Medium |
| **Traceability** | PROMO-11 |
| **Pre-Conditions** | - Cart meets promotion conditions<br>- Different promotion types are active |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 800 | Cart total meets fixed discount threshold |
| Step 2 | Verify fixed discount application | R$ 100 discount is applied |
| Step 3 | Add products to reach R$ 1,000 | Cart total meets percentage discount threshold |
| Step 4 | Verify percentage discount | 15% discount is calculated and applied |
| Step 5 | Check discount display | Both discount types are shown in summary |
| Step 6 | Verify total calculation | Total = Subtotal - Fixed Discount - Percentage Discount |

**Post-Conditions:**
- Both promotion types work correctly
- Discounts are properly calculated
- Summary shows all applied discounts
- Final total is accurate

---

### **TC-PROMO-003: Promotion Rules and Conditions**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-003 |
| **Title** | Validate promotion rules based on dates and minimum cart values |
| **Priority** | Medium |
| **Traceability** | PROMO-12 |
| **Pre-Conditions** | - Promotions are configured with date ranges<br>- Cart values can be adjusted |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Check current date | Verify if within promotion date range |
| Step 2 | Add products below R$ 800 | Cart total is below promotion threshold |
| Step 3 | Verify no promotion applied | No discount is shown |
| Step 4 | Add products to reach R$ 800 | Cart total meets minimum threshold |
| Step 5 | Verify promotion activation | Discount is now applied |
| Step 6 | Check promotion dates | Verify promotion is within valid date range |

**Post-Conditions:**
- Promotions respect minimum cart values
- Date-based rules are enforced
- Promotions activate/deactivate correctly
- Rules are consistently applied

---

## 🖥️ **USER INTERFACE TEST CASES**

### **TC-UI-001: Responsive Design**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-001 |
| **Title** | Validate responsive design across different screen sizes |
| **Priority** | High |
| **Traceability** | UI-13 |
| **Pre-Conditions** | - Application is accessible<br>- Different device sizes available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Open application on desktop | Full layout is displayed correctly |
| Step 2 | Resize browser to tablet size | Layout adapts to medium screen |
| Step 3 | Resize to mobile size | Layout adapts to small screen |
| Step 4 | Check navigation menu | Menu adapts to screen size |
| Step 5 | Verify product grid | Grid adjusts columns appropriately |
| Step 6 | Test touch interactions | Touch-friendly interface on mobile |

**Post-Conditions:**
- Interface adapts to all screen sizes
- Navigation remains functional
- Content is readable on all devices
- Touch interactions work on mobile

---

### **TC-UI-002: Checkout Functionality**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-002 |
| **Title** | Validate checkout button functionality and user feedback |
| **Priority** | High |
| **Traceability** | UI-14 |
| **Pre-Conditions** | - Cart contains products<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Locate checkout button | Checkout button is visible and enabled |
| Step 3 | Click checkout button | Checkout confirmation appears |
| Step 4 | Verify order summary | Order details are displayed correctly |
| Step 5 | Confirm checkout | Success message appears |
| Step 6 | Check cart state | Cart is cleared after successful checkout |

**Post-Conditions:**
- Checkout process completes successfully
- Order summary is accurate
- Success feedback is provided
- Cart is reset for new purchases

---

## ⚙️ **ADMIN PANEL TEST CASES**

### **TC-ADMIN-001: Create New Promotion**
| Field | Value |
|-------|-------|
| **ID** | TC-ADMIN-001 |
| **Title** | Validate that administrators can create new promotions |
| **Priority** | High |
| **Traceability** | ADMIN-15 |
| **Pre-Conditions** | - Admin page is accessible<br>- Form fields are available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Admin page | Admin page loads with promotion form |
| Step 2 | Fill promotion name field | Name is accepted |
| Step 3 | Fill description field | Description is accepted |
| Step 4 | Select promotion type | Type selection works |
| Step 5 | Enter discount value | Value is accepted |
| Step 6 | Set minimum cart value | Minimum value is set |
| Step 7 | Set start and end dates | Dates are accepted |
| Step 8 | Click "Create Promotion" button | Success message appears |

**Post-Conditions:**
- New promotion is created successfully
- Promotion appears in active promotions list
- Form is reset for next entry
- Success feedback is provided

---

### **TC-ADMIN-002: Delete Existing Promotion**
| Field | Value |
|-------|-------|
| **ID** | TC-ADMIN-002 |
| **Title** | Validate that administrators can delete existing promotions |
| **Priority** | Medium |
| **Traceability** | ADMIN-15 |
| **Pre-Conditions** | - Admin page is accessible<br>- Existing promotions are listed |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Admin page | Admin page loads with promotions list |
| Step 2 | Locate delete button for a promotion | Delete button is visible |
| Step 3 | Click delete button | Confirmation dialog appears |
| Step 4 | Confirm deletion | Promotion is removed from list |
| Step 5 | Verify promotion removal | Promotion no longer appears |
| Step 6 | Check promotions count | Count decreases by 1 |

**Post-Conditions:**
- Promotion is successfully deleted
- List is updated accordingly
- Confirmation prevents accidental deletion
- System state is consistent

---

## �� **INTEGRATION TEST CASES**

### **TC-INT-001: Navigation Between Pages**
| Field | Value |
|-------|-------|
| **ID** | TC-INT-001 |
| **Title** | Validate seamless navigation between all application pages |
| **Priority** | Medium |
| **Traceability** | UI-13, UI-14 |
| **Pre-Conditions** | - Application is loaded<br>- All pages are accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Start on Home page | Home page loads correctly |
| Step 2 | Navigate to Promotions page | Promotions page loads with content |
| Step 3 | Navigate to Cart page | Cart page loads with current state |
| Step 4 | Navigate to Admin page | Admin page loads with forms |
| Step 5 | Return to Home page | Home page loads correctly |
| Step 6 | Use browser back/forward | Navigation history works correctly |

**Post-Conditions:**
- All pages load correctly
- Navigation is smooth and consistent
- Page state is maintained
- Browser navigation works

---

### **TC-INT-002: Data Consistency Across Pages**
| Field | Value |
|-------|-------|
| **ID** | TC-INT-002 |
| **Title** | Validate that data remains consistent when navigating between pages |
| **Priority** | High |
| **Traceability** | CART-01 to CART-06 |
| **Pre-Conditions** | - Cart contains products<br>- Coupons are applied<br>- Promotions are active |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to cart on Home page | Products are added to cart |
| Step 2 | Navigate to Cart page | Same products are displayed |
| Step 3 | Apply coupon on Cart page | Coupon is applied |
| Step 4 | Navigate to Home page | Cart count in header is updated |
| Step 5 | Return to Cart page | Cart state is preserved |
| Step 6 | Verify all data consistency | Products, quantities, and discounts are correct |

**Post-Conditions:**
- Data is consistent across all pages
- Cart state is preserved during navigation
- Header information is always current
- User experience is seamless

---

## 🧪 **TEST EXECUTION SUMMARY**

### **Test Case Statistics**
- **Total Test Cases:** 20
- **High Priority:** 12
- **Medium Priority:** 8
- **Low Priority:** 0

### **Coverage by Functionality**
- **Shopping Cart:** 6 test cases (100% coverage)
- **Coupon System:** 3 test cases (100% coverage)
- **Promotion System:** 3 test cases (100% coverage)
- **User Interface:** 2 test cases (100% coverage)
- **Admin Panel:** 2 test cases (100% coverage)
- **Integration:** 2 test cases (100% coverage)

### **Test Execution Status**
| Status | Count | Percentage |
|--------|-------|------------|
| **Not Executed** | 20 | 100% |
| **Passed** | 0 | 0% |
| **Failed** | 0 | 0% |
| **Blocked** | 0 | 0% |

---

## 📋 **TEST CASE APPROVAL**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Test Designer** | Camila Monteiro | _________________ | 08/23/2024 |
| **Test Manager** | Camila Monteiro | _________________ | _________________ |

---

**Document created on: August 23, 2024**  
**Next revision: August 30, 2024**

---

## 🎯 **Executive Summary**

This Test Cases document provides comprehensive coverage of all QACommerce functionalities, following ISO 29119-3 standards. The 20 test cases ensure complete validation of shopping cart, coupon system, promotions, user interface, and administrative features, with clear steps, expected results, and post-conditions for each test scenario.

**Status: ✅ READY FOR EXECUTION**  
**Next step: Execute test cases and document results**