# 🧪 Test Cases - QACommerce
## Test Case Documentation based on User Stories Acceptance Criteria

---

## 📋 **Test Case Overview**

**Project:** QACommerce - E-commerce Shopping Cart  
**Document Version:** 2.0  
**Author:** Camila Monteiro  
**Date:** August 23, 2024  
**Standard:** ISO 29119-3  
**Based on:** Test Plan User Stories Acceptance Criteria  

---

## 🛒 **SHOPPING CART TEST CASES**

### **TC-CART-001: Add Product to Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-001 |
| **Title** | Validate that user can click "Add to Cart" button |
| **Priority** | High |
| **Traceability** | US-CART-001 |
| **Pre-Conditions** | - User is on Home page<br>- Products are displayed in marketplace<br>- Cart is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Home page | Home page loads with products displayed |
| Step 2 | Locate a product with "Add to Cart" button | Button is visible and clickable |
| Step 3 | Click "Add to Cart" button | Button responds to click action |
| Step 4 | Verify button state after click | Button shows visual feedback |

**Post-Conditions:**
- Button is functional and responsive
- User interaction is captured by system

---

### **TC-CART-002: Product Appears in Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-002 |
| **Title** | Validate that product appears in cart with quantity 1 after adding |
| **Priority** | High |
| **Traceability** | US-CART-001 |
| **Pre-Conditions** | - Product was added to cart<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with added product |
| Step 2 | Locate the added product in cart | Product is visible in cart list |
| Step 3 | Verify product information | Product name, price, and icon are displayed |
| Step 4 | Check product quantity | Quantity shows as 1 |

**Post-Conditions:**
- Product is successfully added to cart
- Product information is complete and accurate
- Quantity is set to 1

---

### **TC-CART-003: Visual Feedback Confirmation**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-003 |
| **Title** | Validate that visual feedback confirms product addition |
| **Priority** | Medium |
| **Traceability** | US-CART-001 |
| **Pre-Conditions** | - Product was added to cart<br>- User is on Home page |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add product to cart | Product is added to cart |
| Step 2 | Observe button state change | Button shows "Added!" text |
| Step 3 | Verify button color change | Button background changes to green |
| Step 4 | Wait for feedback duration | Feedback remains visible for 2 seconds |
| Step 5 | Check button return to normal | Button returns to original state |

**Post-Conditions:**
- Visual feedback is clearly visible
- Feedback duration is appropriate
- Button returns to normal state

---

### **TC-CART-004: Cart Total Update**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-004 |
| **Title** | Validate that cart updates total automatically after adding product |
| **Priority** | High |
| **Traceability** | US-CART-001 |
| **Pre-Conditions** | - Cart is accessible<br>- Product was added to cart |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note initial cart total | Initial total is displayed |
| Step 2 | Add product to cart | Product is added to cart |
| Step 3 | Navigate to Cart page | Cart page loads with new product |
| Step 4 | Verify cart total update | Total includes new product price |
| Step 5 | Check total calculation | Total = Previous total + New product price |

**Post-Conditions:**
- Cart total is updated correctly
- Calculation is mathematically accurate
- Total reflects all cart items

---

### **TC-CART-005: Quantity Controls Visibility**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-005 |
| **Title** | Validate that + and - buttons are visible for each cart item |
| **Priority** | High |
| **Traceability** | US-CART-002 |
| **Pre-Conditions** | - Cart contains products<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Locate quantity controls for each item | + and - buttons are visible |
| Step 3 | Verify button positioning | Buttons are positioned near quantity display |
| Step 4 | Check button accessibility | Buttons are clickable and responsive |
| Step 5 | Verify visual consistency | All items have consistent button layout |

**Post-Conditions:**
- Quantity controls are visible for all items
- Buttons are properly positioned
- Controls are accessible and functional

---

### **TC-CART-006: Increase Quantity Function**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-006 |
| **Title** | Validate that quantity increases when clicking + button |
| **Priority** | High |
| **Traceability** | US-CART-002 |
| **Pre-Conditions** | - Cart contains product with quantity 1<br>- + button is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note current quantity | Current quantity is displayed |
| Step 2 | Click + button | Button responds to click |
| Step 3 | Verify quantity increase | Quantity increases by 1 |
| Step 4 | Check cart total update | Total updates to reflect new quantity |
| Step 5 | Verify calculation accuracy | Total = (price × new quantity) |

**Post-Conditions:**
- Quantity increases correctly
- Cart total updates accordingly
- Calculation remains accurate

---

### **TC-CART-007: Decrease Quantity Function**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-007 |
| **Title** | Validate that quantity decreases when clicking - button |
| **Priority** | High |
| **Traceability** | US-CART-002 |
| **Pre-Conditions** | - Cart contains product with quantity > 1<br>- - button is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note current quantity | Current quantity is displayed |
| Step 2 | Click - button | Button responds to click |
| Step 3 | Verify quantity decrease | Quantity decreases by 1 |
| Step 4 | Check cart total update | Total updates to reflect new quantity |
| Step 5 | Verify calculation accuracy | Total = (price × new quantity) |

**Post-Conditions:**
- Quantity decreases correctly
- Cart total updates accordingly
- Calculation remains accurate

---

### **TC-CART-008: Minus Button Disabled State**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-008 |
| **Title** | Validate that - button is disabled when quantity = 1 |
| **Priority** | Medium |
| **Traceability** | US-CART-002 |
| **Pre-Conditions** | - Cart contains product with quantity = 1 |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Locate product with quantity = 1 | Product is visible in cart |
| Step 2 | Check - button state | - button is disabled |
| Step 3 | Verify visual indication | Disabled state is visually distinct |
| Step 4 | Attempt to click - button | Button does not respond to click |
| Step 5 | Verify quantity unchanged | Quantity remains at 1 |

**Post-Conditions:**
- - button is properly disabled
- Visual state indicates disabled condition
- Quantity cannot be decreased below 1

---

### **TC-CART-009: Product Removal at Zero Quantity**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-009 |
| **Title** | Validate that product is removed when quantity reaches 0 |
| **Priority** | High |
| **Traceability** | US-CART-002 |
| **Pre-Conditions** | - Cart contains product with quantity = 1 |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Locate product with quantity = 1 | Product is visible in cart |
| Step 2 | Click - button | Quantity decreases to 0 |
| Step 3 | Verify product removal | Product disappears from cart |
| Step 4 | Check cart total update | Total excludes removed product |
| Step 5 | Verify cart state | Cart reflects removal correctly |

**Post-Conditions:**
- Product is completely removed from cart
- Cart total is updated accordingly
- Cart state is consistent

---

### **TC-CART-010: Remove Button Visibility**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-010 |
| **Title** | Validate that trash icon is visible for each cart item |
| **Priority** | High |
| **Traceability** | US-CART-003 |
| **Pre-Conditions** | - Cart contains products<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Locate remove button for each item | Trash icon is visible |
| Step 3 | Verify icon positioning | Icon is positioned appropriately |
| Step 4 | Check icon accessibility | Icon is clickable |
| Step 5 | Verify visual consistency | All items have consistent icon layout |

**Post-Conditions:**
- Remove button is visible for all items
- Icon is properly positioned
- Button is accessible and functional

---

### **TC-CART-011: Product Removal Function**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-011 |
| **Title** | Validate that clicking trash icon removes the item |
| **Priority** | High |
| **Traceability** | US-CART-003 |
| **Pre-Conditions** | - Cart contains product<br>- Trash icon is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note current cart items | Current items are displayed |
| Step 2 | Click trash icon for specific item | Icon responds to click |
| Step 3 | Verify item removal | Item disappears from cart |
| Step 4 | Check cart total update | Total excludes removed item |
| Step 5 | Verify cart state consistency | Cart reflects removal correctly |

**Post-Conditions:**
- Item is completely removed from cart
- Cart total is updated accordingly
- Cart state remains consistent

---

### **TC-CART-012: Cart Total After Removal**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-012 |
| **Title** | Validate that cart total updates after removing item |
| **Priority** | High |
| **Traceability** | US-CART-003 |
| **Pre-Conditions** | - Cart contains multiple items<br>- Item removal is performed |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note current cart total | Current total is displayed |
| Step 2 | Remove specific item from cart | Item is removed from cart |
| Step 3 | Verify total update | Total excludes removed item price |
| Step 4 | Check calculation accuracy | Total = Previous total - Removed item price |
| Step 5 | Verify cart state | Cart reflects correct total |

**Post-Conditions:**
- Cart total is updated correctly
- Calculation is mathematically accurate
- Cart state remains consistent

---

### **TC-CART-013: Cart Count Update**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-013 |
| **Title** | Validate that cart count decreases after removing item |
| **Priority** | Medium |
| **Traceability** | US-CART-003 |
| **Pre-Conditions** | - Cart contains multiple items<br>- Cart count is displayed in header |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note current cart count in header | Current count is displayed |
| Step 2 | Remove specific item from cart | Item is removed from cart |
| Step 3 | Verify count decrease | Count decreases by 1 |
| Step 4 | Check header update | Header reflects new count |
| Step 5 | Verify count accuracy | Count matches actual cart items |

**Post-Conditions:**
- Cart count decreases correctly
- Header is updated accordingly
- Count remains accurate

---

### **TC-CART-014: Cart Items Display**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-014 |
| **Title** | Validate that all cart items are displayed with complete information |
| **Priority** | High |
| **Traceability** | US-CART-004 |
| **Pre-Conditions** | - Cart contains multiple items<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with all items |
| Step 2 | Verify item information display | Each item shows: icon, name, price, quantity, total |
| Step 3 | Check information completeness | All required fields are populated |
| Step 4 | Verify information accuracy | Information matches added products |
| Step 5 | Check visual layout | Items are displayed in organized manner |

**Post-Conditions:**
- All cart items are visible
- Item information is complete and accurate
- Layout is organized and readable

---

### **TC-CART-015: Empty Cart Message**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-015 |
| **Title** | Validate that clear message is displayed when cart is empty |
| **Priority** | Medium |
| **Traceability** | US-CART-006 |
| **Pre-Conditions** | - Cart is empty<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Ensure cart is empty | No products in cart |
| Step 2 | Navigate to Cart page | Cart page loads |
| Step 3 | Verify empty state message | Clear message is displayed |
| Step 4 | Check message content | Message explains cart is empty |
| Step 5 | Verify message visibility | Message is prominently displayed |

**Post-Conditions:**
- Empty cart message is clearly visible
- Message content is helpful and clear
- User understands cart state

---

### **TC-CART-016: Add Products Button Availability**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-016 |
| **Title** | Validate that "Add Products" button is available when cart is empty |
| **Priority** | Medium |
| **Traceability** | US-CART-006 |
| **Pre-Conditions** | - Cart is empty<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with empty state |
| Step 2 | Locate "Add Products" button | Button is visible |
| Step 3 | Verify button accessibility | Button is clickable |
| Step 4 | Check button positioning | Button is prominently positioned |
| Step 5 | Verify button text | Button text is clear and actionable |

**Post-Conditions:**
- "Add Products" button is available
- Button is accessible and functional
- Button provides clear action path

---

### **TC-CART-017: User Guidance for Empty Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-017 |
| **Title** | Validate that user is guided on next steps when cart is empty |
| **Priority** | Medium |
| **Traceability** | US-CART-006 |
| **Pre-Conditions** | - Cart is empty<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with empty state |
| Step 2 | Read empty cart message | Message provides guidance |
| Step 3 | Locate action buttons | Action buttons are available |
| Step 4 | Check navigation options | Navigation to other pages is possible |
| Step 5 | Verify user path clarity | User knows how to proceed |

**Post-Conditions:**
- User receives clear guidance
- Action path is obvious
- User can navigate freely

---

### **TC-CART-018: Navigation from Empty Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-018 |
| **Title** | Validate that navigation to other pages works from empty cart |
| **Priority** | Medium |
| **Traceability** | US-CART-006 |
| **Pre-Conditions** | - Cart is empty<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with empty state |
| Step 2 | Click navigation menu items | Navigation responds to clicks |
| Step 3 | Navigate to Home page | Home page loads correctly |
| Step 4 | Navigate to Promotions page | Promotions page loads correctly |
| Step 5 | Return to Cart page | Cart page loads correctly |

**Post-Conditions:**
- Navigation works from empty cart
- All pages are accessible
- User experience is seamless

---

## 🎁 **COUPON SYSTEM TEST CASES**

### **TC-COUPON-001: Coupon Input Field Availability**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-001 |
| **Title** | Validate that field to enter coupon code is available |
| **Priority** | High |
| **Traceability** | US-COUPON-001 |
| **Pre-Conditions** | - Cart contains products<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Locate coupon section | Coupon section is visible |
| Step 3 | Find coupon input field | Input field is visible |
| Step 4 | Verify field accessibility | Field is clickable and editable |
| Step 5 | Check field placeholder | Placeholder text is helpful |

**Post-Conditions:**
- Coupon input field is available
- Field is accessible and functional
- User knows how to use the field

---

### **TC-COUPON-002: Valid Coupon Acceptance**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-002 |
| **Title** | Validate that valid coupons are accepted and applied |
| **Priority** | High |
| **Traceability** | US-COUPON-001 |
| **Pre-Conditions** | - Cart contains products<br>- Valid coupon code is known |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Enter valid coupon code | Code is accepted in input field |
| Step 3 | Click "Apply Coupon" button | Button responds to click |
| Step 4 | Verify coupon application | Success message appears |
| Step 5 | Check discount display | Discount appears in cart summary |

**Post-Conditions:**
- Valid coupon is accepted
- Coupon is successfully applied
- Discount is displayed correctly

---

### **TC-COUPON-003: Coupon Discount Calculation**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-003 |
| **Title** | Validate that discount is calculated and applied correctly |
| **Priority** | High |
| **Traceability** | US-COUPON-001 |
| **Pre-Conditions** | - Valid coupon is applied<br>- Cart total is known |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note cart subtotal | Subtotal is displayed |
| Step 2 | Apply valid coupon | Coupon is applied successfully |
| Step 3 | Verify discount amount | Discount amount is displayed |
| Step 4 | Check final total | Total = Subtotal - Discount |
| Step 5 | Verify calculation accuracy | Calculation is mathematically correct |

**Post-Conditions:**
- Discount is calculated correctly
- Final total is accurate
- Calculation follows business rules

---

### **TC-COUPON-004: Cart Total Update with Coupon**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-004 |
| **Title** | Validate that cart total is updated after applying coupon |
| **Priority** | High |
| **Traceability** | US-COUPON-001 |
| **Pre-Conditions** | - Valid coupon is applied<br>- Cart total is displayed |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note cart total before coupon | Initial total is displayed |
| Step 2 | Apply valid coupon | Coupon is applied successfully |
| Step 3 | Verify total update | Total reflects coupon discount |
| Step 4 | Check discount display | Discount is shown separately |
| Step 5 | Verify final calculation | Final total is accurate |

**Post-Conditions:**
- Cart total is updated correctly
- Discount is clearly displayed
- Final total is accurate

---

### **TC-COUPON-005: Remove Button Visibility**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-005 |
| **Title** | Validate that "Remove" button is visible for applied coupons |
| **Priority** | Medium |
| **Traceability** | US-COUPON-002 |
| **Pre-Conditions** | - Coupon is applied to cart<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with applied coupon |
| Step 2 | Locate coupon section | Coupon section is visible |
| Step 3 | Find "Remove" button | Remove button is visible |
| Step 4 | Verify button accessibility | Button is clickable |
| Step 5 | Check button positioning | Button is positioned appropriately |

**Post-Conditions:**
- Remove button is visible
- Button is accessible and functional
- Button is properly positioned

---

### **TC-COUPON-006: Coupon Removal Function**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-006 |
| **Title** | Validate that clicking remove button removes the coupon |
| **Priority** | High |
| **Traceability** | US-COUPON-002 |
| **Pre-Conditions** | - Coupon is applied to cart<br>- Remove button is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note current cart total | Current total with coupon is displayed |
| Step 2 | Click "Remove" button | Button responds to click |
| Step 3 | Verify coupon removal | Coupon is removed from cart |
| Step 4 | Check total update | Total reverts to pre-coupon amount |
| Step 5 | Verify discount removal | Discount no longer appears |

**Post-Conditions:**
- Coupon is completely removed
- Cart total is updated accordingly
- Discount is no longer applied

---

### **TC-COUPON-007: Cart Total After Coupon Removal**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-007 |
| **Title** | Validate that cart total updates after removing coupon |
| **Priority** | High |
| **Traceability** | US-COUPON-002 |
| **Pre-Conditions** | - Coupon is removed from cart<br>- Cart total is displayed |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note cart total with coupon | Total with coupon is displayed |
| Step 2 | Remove applied coupon | Coupon is removed from cart |
| Step 3 | Verify total update | Total reverts to pre-coupon amount |
| Step 4 | Check discount display | Discount no longer appears |
| Step 5 | Verify calculation accuracy | Total = Subtotal (no discount) |

**Post-Conditions:**
- Cart total is updated correctly
- Discount is completely removed
- Total calculation is accurate

---

### **TC-COUPON-008: Coupon Input Field Clearing**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-008 |
| **Title** | Validate that coupon input field is cleared after removing coupon |
| **Priority** | Medium |
| **Traceability** | US-COUPON-002 |
| **Pre-Conditions** | - Coupon is removed from cart<br>- Input field is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note input field content | Field may contain coupon code |
| Step 2 | Remove applied coupon | Coupon is removed from cart |
| Step 3 | Check input field state | Field is cleared |
| Step 4 | Verify field readiness | Field is ready for new input |
| Step 5 | Check placeholder text | Placeholder is visible |

**Post-Conditions:**
- Input field is cleared
- Field is ready for new input
- User can enter new coupon code

---

### **TC-COUPON-009: Coupon Reapplication**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-009 |
| **Title** | Validate that user can reapply the same coupon if desired |
| **Priority** | Medium |
| **Traceability** | US-COUPON-002 |
| **Pre-Conditions** | - Coupon was removed from cart<br>- Same coupon code is available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Remove applied coupon | Coupon is removed from cart |
| Step 2 | Enter same coupon code | Code is accepted in input field |
| Step 3 | Click "Apply Coupon" button | Button responds to click |
| Step 4 | Verify coupon application | Success message appears |
| Step 5 | Check discount display | Discount is applied again |

**Post-Conditions:**
- Same coupon can be reapplied
- Coupon works as expected
- Discount is applied correctly

---

## �� **PROMOTION SYSTEM TEST CASES**

### **TC-PROMO-001: Automatic Promotion Application**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-001 |
| **Title** | Validate that promotions are applied automatically |
| **Priority** | High |
| **Traceability** | US-PROMO-001 |
| **Pre-Conditions** | - Cart contains products<br>- Cart total approaches promotion threshold |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 800 | Cart total is R$ 800 or above |
| Step 2 | Verify promotion application | R$ 100 discount is automatically applied |
| Step 3 | Check promotion display | Promotion appears in cart summary |
| Step 4 | Verify total update | Total reflects promotion discount |
| Step 5 | Check promotion details | Promotion rules are displayed |

**Post-Conditions:**
- Promotion is applied automatically
- Discount is displayed correctly
- Total is updated accordingly

---

### **TC-PROMO-002: Promotion Display in Summary**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-002 |
| **Title** | Validate that discounts appear in cart summary |
| **Priority** | Medium |
| **Traceability** | US-PROMO-001 |
| **Pre-Conditions** | - Promotion is applied to cart<br>- Cart summary is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with applied promotion |
| Step 2 | Locate cart summary section | Summary section is visible |
| Step 3 | Check promotion display | Promotion discount is shown |
| Step 4 | Verify discount amount | Discount amount is accurate |
| Step 5 | Check total calculation | Total reflects promotion correctly |

**Post-Conditions:**
- Promotion is displayed in summary
- Discount amount is accurate
- Total calculation is correct

---

### **TC-PROMO-003: Total Update with Promotions**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-003 |
| **Title** | Validate that total is updated with applied promotions |
| **Priority** | High |
| **Traceability** | US-PROMO-001 |
| **Pre-Conditions** | - Promotion is applied to cart<br>- Cart total is displayed |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Note cart subtotal | Subtotal is displayed |
| Step 2 | Verify promotion application | Promotion is applied automatically |
| Step 3 | Check total update | Total reflects promotion discount |
| Step 4 | Verify calculation accuracy | Total = Subtotal - Promotion Discount |
| Step 5 | Check discount display | Promotion discount is clearly shown |

**Post-Conditions:**
- Total is updated correctly
- Calculation is mathematically accurate
- Promotion discount is clearly displayed

---

### **TC-PROMO-004: Higher Value Promotion Priority**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-004 |
| **Title** | Validate that higher value promotions have priority |
| **Priority** | Medium |
| **Traceability** | US-PROMO-001 |
| **Pre-Conditions** | - Cart contains products<br>- Multiple promotions are available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 800 | Cart total is R$ 800 or above |
| Step 2 | Verify first promotion | R$ 100 discount is applied |
| Step 3 | Add products to reach R$ 1,000 | Cart total is R$ 1,000 or above |
| Step 4 | Check promotion priority | Higher discount (15%) is applied |
| Step 5 | Verify total calculation | Total reflects higher discount |

**Post-Conditions:**
- Higher value promotion takes priority
- Total reflects the better discount
- Promotion system works correctly

---

### **TC-PROMO-005: Percentage Discount Calculation**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-005 |
| **Title** | Validate that percentage discounts are calculated correctly |
| **Priority** | High |
| **Traceability** | US-PROMO-002 |
| **Pre-Conditions** | - Cart total meets percentage discount threshold<br>- Promotion is active |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 1,000 | Cart total is R$ 1,000 or above |
| Step 2 | Verify promotion activation | 15% discount promotion is applied |
| Step 3 | Check discount calculation | Discount = 15% × Subtotal |
| Step 4 | Verify total update | Total = Subtotal - Percentage Discount |
| Step 5 | Check calculation accuracy | Calculation is mathematically correct |

**Post-Conditions:**
- Percentage discount is calculated correctly
- Total reflects the discount accurately
- Calculation follows business rules

---

### **TC-PROMO-006: Fixed Amount Discount Application**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-006 |
| **Title** | Validate that fixed amount discounts are applied correctly |
| **Priority** | High |
| **Traceability** | US-PROMO-002 |
| **Pre-Conditions** | - Cart total meets fixed discount threshold<br>- Promotion is active |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 800 | Cart total is R$ 800 or above |
| Step 2 | Verify promotion activation | R$ 100 discount promotion is applied |
| Step 3 | Check discount application | Fixed R$ 100 discount is applied |
| Step 4 | Verify total update | Total = Subtotal - R$ 100 |
| Step 5 | Check calculation accuracy | Calculation is mathematically correct |

**Post-Conditions:**
- Fixed amount discount is applied correctly
- Total reflects the discount accurately
- Calculation follows business rules

---

### **TC-PROMO-007: Discount Type Identification**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-007 |
| **Title** | Validate that discount types are clearly identified |
| **Priority** | Medium |
| **Traceability** | US-PROMO-002 |
| **Pre-Conditions** | - Promotions are applied to cart<br>- Cart summary is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with applied promotions |
| Step 2 | Locate promotion display | Promotions are visible in summary |
| Step 3 | Check discount type labels | Percentage and fixed discounts are labeled |
| Step 4 | Verify type clarity | Each discount type is clearly identified |
| Step 5 | Check visual distinction | Different discount types are visually distinct |

**Post-Conditions:**
- Discount types are clearly identified
- Labels are informative and clear
- Visual distinction helps user understanding

---

### **TC-PROMO-008: Promotion Rules Validation**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-008 |
| **Title** | Validate that minimum values are respected |
| **Priority** | High |
| **Traceability** | US-PROMO-003 |
| **Pre-Conditions** | - Cart contains products<br>- Promotion rules are defined |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products below R$ 800 | Cart total is below promotion threshold |
| Step 2 | Verify no promotion applied | No discount is shown |
| Step 3 | Add products to reach R$ 800 | Cart total meets minimum threshold |
| Step 4 | Check promotion activation | Promotion is now applied |
| Step 5 | Verify threshold respect | Promotion only activates at minimum value |

**Post-Conditions:**
- Minimum values are respected
- Promotions activate only when conditions are met
- System follows business rules correctly

---

### **TC-PROMO-009: Promotion Deadline Validation**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-009 |
| **Title** | Validate that promotions within deadline are applied |
| **Priority** | Medium |
| **Traceability** | US-PROMO-003 |
| **Pre-Conditions** | - Cart meets promotion conditions<br>- Current date is within promotion period |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Check current date | Current date is verified |
| Step 2 | Verify promotion dates | Promotion start and end dates are checked |
| Step 3 | Meet promotion conditions | Cart total meets minimum threshold |
| Step 4 | Check promotion application | Promotion is applied if within deadline |
| Step 5 | Verify promotion status | Promotion status is accurate |

**Post-Conditions:**
- Promotions within deadline are applied
- Date-based rules are enforced
- Promotion system works correctly

---

## 🖥️ **USER INTERFACE TEST CASES**

### **TC-UI-001: Desktop Interface Functionality**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-001 |
| **Title** | Validate that interface works on desktop (1200px+) |
| **Priority** | High |
| **Traceability** | US-UI-001 |
| **Pre-Conditions** | - Desktop browser is available<br>- Application is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Open application in desktop browser | Application loads correctly |
| Step 2 | Verify full layout display | Full layout is displayed correctly |
| Step 3 | Check navigation functionality | Navigation works properly |
| Step 4 | Test all page interactions | All interactions work correctly |
| Step 5 | Verify content readability | Content is easily readable |

**Post-Conditions:**
- Desktop interface works correctly
- All functionality is accessible
- User experience is optimal

---

### **TC-UI-002: Tablet Interface Functionality**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-002 |
| **Title** | Validate that interface works on tablet (768px-1199px) |
| **Priority** | High |
| **Traceability** | US-UI-001 |
| **Pre-Conditions** | - Tablet device or emulator is available<br>- Application is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Open application on tablet | Application loads correctly |
| Step 2 | Verify medium layout display | Medium layout is displayed correctly |
| Step 3 | Check navigation adaptation | Navigation adapts to medium screen |
| Step 4 | Test touch interactions | Touch interactions work correctly |
| Step 5 | Verify content adaptation | Content adapts to medium screen |

**Post-Conditions:**
- Tablet interface works correctly
- Layout adapts appropriately
- Touch interactions are functional

---

### **TC-UI-003: Mobile Interface Functionality**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-003 |
| **Title** | Validate that interface works on mobile (320px-767px) |
| **Priority** | High |
| **Traceability** | US-UI-001 |
| **Pre-Conditions** | - Mobile device or emulator is available<br>- Application is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Open application on mobile | Application loads correctly |
| Step 2 | Verify mobile layout display | Mobile layout is displayed correctly |
| Step 3 | Check navigation adaptation | Navigation adapts to small screen |
| Step 4 | Test touch interactions | Touch interactions work correctly |
| Step 5 | Verify content adaptation | Content adapts to small screen |

**Post-Conditions:**
- Mobile interface works correctly
- Layout adapts appropriately
- Touch interactions are functional

---

### **TC-UI-004: Navigation Functionality**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-004 |
| **Title** | Validate that navigation is functional on all devices |
| **Priority** | High |
| **Traceability** | US-UI-001 |
| **Pre-Conditions** | - Application is accessible<br>- Multiple devices are available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Test navigation on desktop | Navigation works on desktop |
| Step 2 | Test navigation on tablet | Navigation works on tablet |
| Step 3 | Test navigation on mobile | Navigation works on mobile |
| Step 4 | Verify consistent behavior | Navigation behavior is consistent |
| Step 5 | Check all navigation paths | All navigation paths work |

**Post-Conditions:**
- Navigation works on all devices
- Behavior is consistent across devices
- All navigation paths are functional

---

### **TC-UI-005: Checkout Button Visibility**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-005 |
| **Title** | Validate that checkout button is visible when there are items |
| **Priority** | High |
| **Traceability** | US-UI-002 |
| **Pre-Conditions** | - Cart contains items<br>- Cart page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with items |
| Step 2 | Locate checkout button | Checkout button is visible |
| Step 3 | Verify button accessibility | Button is clickable |
| Step 4 | Check button positioning | Button is prominently positioned |
| Step 5 | Verify button text | Button text is clear and actionable |

**Post-Conditions:**
- Checkout button is visible
- Button is accessible and functional
- Button provides clear action path

---

### **TC-UI-006: Checkout Process Clarity**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-006 |
| **Title** | Validate that checkout process is clear and intuitive |
| **Priority** | High |
| **Traceability** | US-UI-002 |
| **Pre-Conditions** | - Cart contains items<br>- Checkout button is visible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Click checkout button | Button responds to click |
| Step 2 | Verify process flow | Checkout process is initiated |
| Step 3 | Check user guidance | User is guided through process |
| Step 4 | Verify step clarity | Each step is clear and understandable |
| Step 5 | Check completion path | Path to completion is obvious |

**Post-Conditions:**
- Checkout process is clear
- User guidance is provided
- Completion path is obvious

---

### **TC-UI-007: Order Summary Display**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-007 |
| **Title** | Validate that order summary is displayed during checkout |
| **Priority** | Medium |
| **Traceability** | US-UI-002 |
| **Pre-Conditions** | - Checkout process is initiated<br>- Order details are available |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Proceed through checkout | Checkout process advances |
| Step 2 | Locate order summary | Order summary is displayed |
| Step 3 | Verify summary content | Summary shows order details |
| Step 4 | Check information accuracy | Information matches cart contents |
| Step 5 | Verify summary clarity | Summary is clear and readable |

**Post-Conditions:**
- Order summary is displayed
- Information is accurate and complete
- Summary is clear and readable

---

### **TC-UI-008: Success Confirmation**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-008 |
| **Title** | Validate that success confirmation is provided after checkout |
| **Priority** | Medium |
| **Traceability** | US-UI-002 |
| **Pre-Conditions** | - Checkout process is completed<br>- Order is successful |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Complete checkout process | Checkout is finalized |
| Step 2 | Verify success message | Success message is displayed |
| Step 3 | Check message content | Message confirms successful completion |
| Step 4 | Verify message visibility | Message is prominently displayed |
| Step 5 | Check next steps guidance | Guidance for next steps is provided |

**Post-Conditions:**
- Success confirmation is provided
- Message is clear and encouraging
- Next steps guidance is available

---

## ⚙️ **ADMINISTRATIVE TEST CASES**

### **TC-ADMIN-001: Promotion Creation Form Availability**
| Field | Value |
|-------|-------|
| **ID** | TC-ADMIN-001 |
| **Title** | Validate that creation form is available |
| **Priority** | High |
| **Traceability** | US-ADMIN-001 |
| **Pre-Conditions** | - Admin page is accessible<br>- User has admin privileges |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Admin page | Admin page loads correctly |
| Step 2 | Locate promotion creation section | Creation section is visible |
| Step 3 | Find creation form | Form is 