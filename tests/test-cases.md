# Test Cases - QACommerce
---

## **Test Case Overview**

**Project:** QACommerce - E-commerce Shopping Cart  
**Document Version:** 1.0  
**Author:** Camila Monteiro  
**Date:** August 20, 2025   
**Automation Tool:** Cypress  
**Strategy:** 10 critical test cases covering core functionality  

---

## **AUTOMATION STRATEGY**

**Note:** These 10 test cases are selected for:
- **Core functionality coverage** across all major features
- **Easy automation** with Cypress
- **High business impact** validation
- **Manageable test execution** scope

---

## **SHOPPING CART TEST CASES**

### **TC-CART-001: Add Product to Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-001 |
| **Title** | Validate product addition to cart with visual feedback |
| **Priority** | High |
| **Traceability** | US-CART-001, US-CART-005 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Home page is loaded<br>- Products are displayed |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Home page | Home page loads with products |
| Step 2 | Click "Add to Cart" on first product | Button shows "Added!" feedback |
| Step 3 | Verify button color change | Button background changes to green |
| Step 4 | Navigate to Cart page | Cart page loads with added product |
| Step 5 | Verify product in cart | Product appears with quantity 1 |

**Post-Conditions:**
- Product is successfully added to cart
- Visual feedback is provided
- Cart total is updated correctly

---

### **TC-CART-002: Update Product Quantity**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-002 |
| **Title** | Validate quantity increase/decrease functionality |
| **Priority** | High |
| **Traceability** | US-CART-002, US-CART-005 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Cart contains product with quantity 1 |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with product |
| Step 2 | Click + button to increase quantity | Quantity increases to 2 |
| Step 3 | Verify cart total update | Total doubles (price × 2) |
| Step 4 | Click - button to decrease quantity | Quantity decreases to 1 |
| Step 5 | Verify cart total update | Total returns to original |

**Post-Conditions:**
- Quantity controls work correctly
- Cart total updates in real-time
- Calculations are accurate

---

### **TC-CART-003: Remove Product from Cart**
| Field | Value |
|-------|-------|
| **ID** | TC-CART-003 |
| **Title** | Validate product removal and cart state update |
| **Priority** | High |
| **Traceability** | US-CART-003, US-CART-004 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Cart contains product |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with product |
| Step 2 | Note current cart total | Total is displayed |
| Step 3 | Click trash icon | Product is removed |
| Step 4 | Verify empty cart message | "Your cart is empty" appears |
| Step 5 | Verify "Add Products" button | Button is visible and clickable |

**Post-Conditions:**
- Product is completely removed
- Empty cart state is displayed
- Navigation path is provided

---

## **COUPON SYSTEM TEST CASES**

### **TC-COUPON-001: Apply Valid Coupon**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-001 |
| **Title** | Validate coupon application and discount calculation |
| **Priority** | High |
| **Traceability** | US-COUPON-001, US-COUPON-003 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Cart contains products<br>- Valid coupon code is known |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Enter valid coupon code | Code is accepted |
| Step 3 | Click "Apply Coupon" button | Success message appears |
| Step 4 | Verify discount display | Discount appears in summary |
| Step 5 | Check total update | Total reflects discount |

**Post-Conditions:**
- Coupon is successfully applied
- Discount is calculated correctly
- Cart total is updated

---

### **TC-COUPON-002: Remove Applied Coupon**
| Field | Value |
|-------|-------|
| **ID** | TC-COUPON-002 |
| **Title** | Validate coupon removal and total reversion |
| **Priority** | Medium |
| **Traceability** | US-COUPON-002 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Valid coupon is applied to cart |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with applied coupon |
| Step 2 | Note current total with coupon | Total with discount is displayed |
| Step 3 | Click "Remove" button | Coupon is removed |
| Step 4 | Verify discount removal | Discount no longer appears |
| Step 5 | Check total reversion | Total reverts to pre-coupon amount |

**Post-Conditions:**
- Coupon is completely removed
- Total reverts correctly
- Input field is cleared

---

## **PROMOTION SYSTEM TEST CASES**

### **TC-PROMO-001: Automatic Promotion Application**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-001 |
| **Title** | Validate automatic promotion when conditions are met |
| **Priority** | High |
| **Traceability** | US-PROMO-001, US-PROMO-002 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Cart can reach promotion threshold |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Add products to reach R$ 800 | Cart total meets threshold |
| Step 2 | Verify promotion activation | R$ 100 discount is applied |
| Step 3 | Check promotion display | Promotion appears in summary |
| Step 4 | Verify total calculation | Total = Subtotal - R$ 100 |
| Step 5 | Add more products to R$ 1,000 | Higher discount (15%) takes priority |

**Post-Conditions:**
- Promotions apply automatically
- Higher value promotions take priority
- Calculations are accurate

---

### **TC-PROMO-002: Promotion Rules Validation**
| Field | Value |
|-------|-------|
| **ID** | TC-PROMO-002 |
| **Title** | Validate promotion rules and minimum values |
| **Priority** | Medium |
| **Traceability** | US-PROMO-003 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Cart contains products below threshold |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Ensure cart below R$ 800 | Cart total is below threshold |
| Step 2 | Verify no promotion applied | No discount is shown |
| Step 3 | Add products to reach R$ 800 | Cart total meets threshold |
| Step 4 | Check promotion activation | Promotion is now applied |
| Step 5 | Verify threshold respect | Promotion only activates at minimum |

**Post-Conditions:**
- Minimum values are respected
- Promotions activate correctly
- Rules are enforced

---

## **USER INTERFACE TEST CASES**

### **TC-UI-001: Responsive Design**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-001 |
| **Title** | Validate responsive design across different viewport sizes |
| **Priority** | High |
| **Traceability** | US-UI-001 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Application is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Set viewport to desktop (1200x800) | Desktop layout is displayed |
| Step 2 | Verify navigation functionality | Navigation works on desktop |
| Step 3 | Set viewport to tablet (768x1024) | Tablet layout is displayed |
| Step 4 | Verify navigation adaptation | Navigation adapts to tablet |
| Step 5 | Set viewport to mobile (375x667) | Mobile layout is displayed |

**Post-Conditions:**
- Interface adapts to all viewport sizes
- Navigation remains functional
- Content is readable on all devices

---

### **TC-UI-002: Checkout Process**
| Field | Value |
|-------|-------|
| **ID** | TC-UI-002 |
| **Title** | Validate complete checkout flow from cart to confirmation |
| **Priority** | High |
| **Traceability** | US-UI-002 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Cart contains products |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Cart page | Cart page loads with products |
| Step 2 | Verify checkout button visibility | Button is visible and enabled |
| Step 3 | Click checkout button | Checkout process is initiated |
| Step 4 | Verify order summary display | Summary shows order details |
| Step 5 | Complete checkout process | Success confirmation appears |

**Post-Conditions:**
- Checkout process completes successfully
- Order summary is accurate
- Success confirmation is provided

---

## **ADMINISTRATIVE TEST CASES**

### **TC-ADMIN-001: Create Promotion**
| Field | Value |
|-------|-------|
| **ID** | TC-ADMIN-001 |
| **Title** | Validate promotion creation form and submission |
| **Priority** | Medium |
| **Traceability** | US-ADMIN-001 |
| **Automation** | Cypress |
| **Pre-Conditions** | - Admin page is accessible |

**Test Steps:**
| Step | Action | Expected Results |
|------|--------|------------------|
| Step 1 | Navigate to Admin page | Admin page loads correctly |
| Step 2 | Locate promotion creation form | Form is visible and accessible |
| Step 3 | Fill required fields | All fields accept input |
| Step 4 | Submit form | Form submission is successful |
| Step 5 | Verify promotion creation | New promotion appears in list |

**Post-Conditions:**
- Promotion is created successfully
- Form is reset for next entry
- New promotion is active

---

## **TEST EXECUTION SUMMARY**

### **Test Case Statistics**
- **Total Test Cases:** 10 (optimized for automation)
- **High Priority:** 7 (70%)
- **Medium Priority:** 3 (30%)
- **Automation Coverage:** 100% (all cases can be automated with Cypress)

### **Coverage by Functionality**
- **Shopping Cart:** 3 test cases (core functionality)
- **Coupon System:** 2 test cases (discount management)
- **Promotion System:** 2 test cases (automatic discounts)
- **User Interface:** 2 test cases (responsiveness & checkout)
- **Administrative:** 1 test case (promotion creation)