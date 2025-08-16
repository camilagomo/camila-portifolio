# Defect Report Templates - QACommerce
---

## 📋 **DEFECT TEMPLATE STRUCTURE**

**Document Version:** 1.0  
**Standard:** ISO 29119-3  
**Author:** Camila Monteiro  
**Date:** August 20, 2024  
**Project:** QACommerce E-commerce Platform  

---

## **DEFECT #001: Coupon Validation Bypass**

### **Defect Information**

| Field | Description |
|-------|-------------|
| **Defect ID** | DEF-QAC-001 |
| **Title** | Coupon validation allows application below minimum cart value |
| **Reporter** | Camila Monteiro |
| **Date Found** | August 23, 2024 14:30:00 |
| **Environment** | QACommerce v1.0, Chrome 120.0, Windows 10 |
| **Test Case ID** | TC-COUPON-002, TC-COUPON-003 |
| **Feature Area** | Shopping Cart - Coupon Management |
| **Priority** | **HIGH** |
| **Severity** | **HIGH** |
| **Status** | Open |

### **Steps to Reproduce:**
1. Navigate to QACommerce Home page
2. Add Sony Headphones (R$ 299.99) to cart
3. Navigate to Shopping Cart page
4. Enter coupon code "PROMO20" (minimum required: R$ 500.00)
5. Click "Apply Coupon" button
6. **Result:** Coupon is accepted despite insufficient cart value

### **Expected Behavior:**
- System should display error message: *"Minimum cart value for this coupon: R$ 500.00"*
- Coupon should NOT be applied to the cart
- Cart total should remain unchanged

### **Actual Behavior:**
- System displays success message: *"Coupon PROMO20 applied successfully! 20% discount"*
- Coupon is applied and discount is calculated
- Cart total is incorrectly reduced

### **Business Impact:**
- **Revenue Loss:** Customers receive unintended discounts
- **Business Rule Violation:** Minimum purchase requirements bypassed
- **User Experience:** Creates inconsistent coupon behavior

### **Attachments:**
- Screenshot: `coupon_validation_bypass.png`
- Browser Console: No JavaScript errors logged

---

## **DEFECT #002: Suboptimal Promotion Selection**

### **Defect Information**

| Field | Description |
|-------|-------------|
| **Defect ID** | DEF-QAC-002 |
| **Title** | Automatic promotion system applies first match instead of best offer |
| **Reporter** | Camila Monteiro |
| **Date Found** | August 23, 2024 14:35:00 |
| **Environment** | QACommerce v1.0, Chrome 120.0, Windows 10 |
| **Test Case ID** | TC-PROMO-001, TC-PROMO-002 |
| **Feature Area** | Shopping Cart - Automatic Promotions |
| **Priority** | **MEDIUM** |
| **Severity** | **MEDIUM** |
| **Status** | Open |

### **Steps to Reproduce:**
1. Navigate to QACommerce Home page
2. Add Notebook Dell Inspiron (R$ 4,599.99) to cart
3. Navigate to Shopping Cart page
4. Verify cart total is above R$ 1,000 (eligible for multiple promotions)
5. **Observe:** System applies 15% discount promotion
6. **Calculate:** 15% of R$ 4,599.99 = R$ 689.99 discount
7. **Compare:** Fixed R$ 100 discount would be less beneficial

### **Expected Behavior:**
- System should evaluate all eligible promotions
- Apply promotion with **maximum discount value**
- Display clear indication of applied promotion

### **Actual Behavior:**
- System applies **first found** eligible promotion
- Does not compare discount values
- May apply suboptimal promotion for customer

### **Business Impact:**
- **Customer Satisfaction:** Users miss better discount opportunities
- **Competitive Disadvantage:** Suboptimal promotion logic
- **Algorithm Efficiency:** Promotion selection not optimized

### **Technical Analysis:**
- Code location: `script.js` lines 388-397
- Issue: Uses `Array.find()` instead of best-match algorithm
- Suggested fix: Implement discount value comparison logic

---

## **DEFECT #003: Invalid Cart Quantity State**

### **Defect Information**

| Field | Description |
|-------|-------------|
| **Defect ID** | DEF-QAC-003 |
| **Title** | Shopping cart allows zero and negative product quantities |
| **Reporter** | Camila Monteiro |
| **Date Found** | August 23, 2024 14:40:00 |
| **Environment** | QACommerce v1.0, Chrome 120.0, Windows 10 |
| **Test Case ID** | TC-CART-002, TC-CART-003 |
| **Feature Area** | Shopping Cart - Quantity Management |
| **Priority** | **MEDIUM** |
| **Severity** | **MEDIUM** |
| **Status** | Open |

### **Steps to Reproduce:**
1. Navigate to QACommerce Home page
2. Add any product to shopping cart (e.g., Sony Headphones)
3. Navigate to Shopping Cart page
4. Click "decrease quantity" button (−) repeatedly
5. Continue clicking until quantity reaches 0 or negative values
6. **Observe:** Product remains in cart with invalid quantity

### **Expected Behavior:**
- Quantity should not go below 1
- When quantity reaches 0, product should be **automatically removed**
- Cart should update total accordingly

### **Actual Behavior:**
- Quantity can become 0 or negative
- Product remains visible in cart
- Cart calculations may become inconsistent
- User sees confusing cart state

### **Business Impact:**
- **User Experience:** Confusing cart behavior
- **Data Integrity:** Invalid quantity states
- **Checkout Process:** Potential issues with zero-quantity items

### **Technical Analysis:**
- Code location: `script.js` lines 207-213
- Issue: Quantity validation logic commented out
- Root cause: Missing boundary condition check

---

## 📋 **GITHUB ISSUE MANAGEMENT**

### **How to Create GitHub Issues:**

1. **Navigate** to GitHub repository
2. **Click** "New Issue" button
3. **Copy** entire defect template (from Defect Information to Technical Analysis)
4. **Paste** into issue description
5. **Add Labels:**
   - `bug` (all defects)
   - `high-priority` (DEF-QAC-001)
   - `medium-priority` (DEF-QAC-002, DEF-QAC-003)
   - `frontend` (all defects)
   - `javascript` (all defects)
6. **Assign** to development team member
7. **Link** to related test cases in comments

### **Issue Tracking Workflow:**

| Status | Description | Action Required |
|--------|-------------|-----------------|
| **Open** | Defect reported and confirmed | Development team review |
| **In Progress** | Developer assigned and working | Code fix implementation |
| **Fixed** | Code changes completed | QA team verification |
| **Verified** | Fix confirmed by testing | Close issue |
| **Closed** | Defect resolved and verified | Archive for reporting |

---

## 🔍 **TECHNICAL IMPLEMENTATION NOTES**

### **Intentional Bug Implementation:**

These defects were deliberately introduced for **QA demonstration purposes**:

| Defect ID | File Location | Implementation Method |
|-----------|---------------|----------------------|
| **DEF-QAC-001** | `script.js` lines 340-343 | Minimum value validation commented out |
| **DEF-QAC-002** | `script.js` lines 388-397 | Uses `Array.find()` instead of optimization algorithm |
| **DEF-QAC-003** | `script.js` lines 207-213 | Quantity boundary validation removed |

### **Fix Implementation Guide:**

**For DEF-QAC-001 (Coupon Validation):**
```javascript
// Uncomment lines 340-343 in applyCoupon() function
if (subtotal < coupon.minValue) {
    showCouponStatus(`Valor mínimo para este cupom: R$ ${coupon.minValue.toFixed(2)}`, 'error');
    return;
}
```

**For DEF-QAC-002 (Promotion Selection):**
```javascript
// Replace find() with best-match algorithm in getActivePromotion()
// Implement discount value comparison logic (see commented code lines 399-414)
```

**For DEF-QAC-003 (Quantity Validation):**
```javascript
// Uncomment quantity validation in updateQuantity() function
if (item.quantity <= 0) {
    removeFromCart(productId);
} else {
    renderCart();
    updateCartSummary();
    applyAutoPromotions();
}
```

---

## 📊 **DEFECT METRICS**

| Metric | Value |
|--------|-------|
| **Total Defects** | 3 |
| **High Priority** | 1 (33%) |
| **Medium Priority** | 2 (67%) |
| **Frontend Issues** | 3 (100%) |
| **Business Logic** | 3 (100%) |
| **Security Impact** | 1 (33%) |

**Test Coverage Impact:** These defects affect core user stories and acceptance criteria.