# 📋 Test Plan - QACommerce
## Facilitated Test Plan according to ISO 29119-3 with User Stories Approach

---

## **1. OBJECTIVE**

### **1.1 Plan Purpose**
This document defines the testing strategy for the **QACommerce** system using a User Stories approach, ensuring that all functionalities are validated according to end-user needs and established functional requirements.

### **1.2 Specific Objectives**
- ✅ Validate functionalities through real user scenarios
- ✅ Ensure each User Story is testable and validatable
- ✅ Implement behavior-based testing
- ✅ Validate user experience across different devices
- ✅ Ensure application quality and usability

### **1.3 User Stories Approach**
- **As a** [end user type]
- **I want** [specific functionality]
- **So that** [benefit/objective]
- **Acceptance Criteria**: [how to validate]

---

## 🔄 **2. VERSION**

| Version | Date | Author | Description |
|---------|------|--------|-------------|
| 2.0 | 08/23/2025 | Camila Monteiro | Version with User Stories and ISO 29119-3 |
| 2.1 | 08/23/2025 | Camila Monteiro | Final review and adjustments |

---

## 🎯 **3. SCOPE**

### **3.1 User Stories in Scope**

#### **Shopping Cart User Stories**
- **US-CART-001**: As a customer, I want to add products to cart so I can purchase them
- **US-CART-002**: As a customer, I want to change quantities in cart so I can adjust my purchase
- **US-CART-003**: As a customer, I want to remove products from cart so I can cancel items
- **US-CART-004**: As a customer, I want to view all cart items so I can review my purchase
- **US-CART-005**: As a customer, I want to see real-time purchase total so I can control my budget
- **US-CART-006**: As a customer, I want guidance when cart is empty so I know how to proceed

#### **Coupon System User Stories**
- **US-COUPON-001**: As a customer, I want to apply discount coupons so I can save on my purchase
- **US-COUPON-002**: As a customer, I want to remove applied coupons so I can cancel discounts
- **US-COUPON-003**: As a customer, I want clear feedback about valid and invalid coupons

#### **Promotion System User Stories**
- **US-PROMO-001**: As a customer, I want automatic discounts when reaching minimum values
- **US-PROMO-002**: As a customer, I want to understand available discount types (percentage or fixed amount)
- **US-PROMO-003**: As a customer, I want to see promotion rules so I can plan my purchase

#### **User Interface User Stories**
- **US-UI-001**: As a customer, I want to use the application on any device so I can shop anywhere
- **US-UI-002**: As a customer, I want to easily complete my purchase so I can finish the transaction

#### **Administrative User Stories**
- **US-ADMIN-001**: As an administrator, I want to create new promotions so I can attract more customers

### **3.2 Out-of-Scope Functionalities**
- **Data Persistence**: Application runs in memory
- **User Authentication**: System without login
- **Real Payment**: Checkout simulation
- **Backend/API**: Frontend only

---

## **4. TEAM**

### **4.1 Responsibilities**
| Role | Responsibility | Name |
|------|----------------|------|
| **QA Analyst** | Overall test coordination and User Stories | Camila Monteiro |

---

## **5. TEST STRATEGY**

### **5.1 User Stories-Based Approach**
- **Behavior Testing**: Validate if system behaves as expected by user
- **Acceptance Testing**: Verify if acceptance criteria are met
- **Usability Testing**: Validate end-user experience
- **Scenario Testing**: Execute complete user flows

### **5.2 Test Types per User Story**
1. **Functional Testing**: Validate if functionality works
2. **Acceptance Testing**: Verify acceptance criteria
3. **Usability Testing**: Validate user experience
4. **Integration Testing**: Verify interaction between functionalities

### **5.3 Test Criteria per User Story**
- **Functionality**: System works according to User Story
- **Usability**: Interface is intuitive for user
- **Performance**: Fast response to user actions
- **Robustness**: Adequate error handling and edge cases

### **5.4 Validation Strategy**
- **Acceptance Criteria**: Each User Story has clear criteria
- **Test Scenarios**: Complete user flows
- **Usability Metrics**: Completion time, error rate
- **User Feedback**: Subjective experience evaluation

---

## 📅 **6. ACTIVITIES AND ESTIMATES**

### **6.1 Test Schedule per User Story**

| Phase | Duration | Activities |
|-------|----------|------------|
| **Planning** | 1 day | Strategy definition and User Stories |
| **Preparation** | 2 days | Test case creation based on User Stories |
| **Execution** | 4 days | Test execution and criteria validation |
| **Reporting** | 1 day | Results analysis and feedback |

### **6.2 Effort Estimates per User Story**

| User Story Category | Test Cases | Estimated Effort |
|-------------------|------------|------------------|
| **Shopping Cart (6 US)** | 18 | 8 hours |
| **Coupon System (3 US)** | 9 | 4 hours |
| **Promotion System (3 US)** | 9 | 4 hours |
| **User Interface (2 US)** | 6 | 3 hours |
| **Administrative (1 US)** | 3 | 2 hours |
| **Integration Testing** | 4 | 3 hours |
| **Usability Testing** | 6 | 3 hours |
| **Documentation** | - | 2 hours |
| **Total** | **59** | **29 hours** |

### **6.3 Project Milestones per User Story**
- **08/14/2025**: User Stories approved and criteria defined
- **08/15/2025**: Test cases created for all User Stories
- **08/16/2025**: Test execution completed
- **08/16/2025**: Final report delivered

---

## **7. ACCEPTANCE CRITERIA PER USER STORY**

### **7.1 Shopping Cart User Stories**

#### **US-CART-001: Add Products**
**Acceptance Criteria:**
- [ ] User can click "Add to Cart"
- [ ] Product appears in cart with quantity 1
- [ ] Visual feedback confirms addition
- [ ] Cart updates total automatically

#### **US-CART-002: Change Quantities**
**Acceptance Criteria:**
- [ ] + and - buttons are visible for each item
- [ ] Quantity increases when clicking +
- [ ] Quantity decreases when clicking -
- [ ] Item is removed when quantity reaches 0

#### **US-CART-003: Remove Products**
**Acceptance Criteria:**
- [ ] Trash icon is visible for each item
- [ ] Clicking trash removes the item
- [ ] Cart updates total after removal
- [ ] Item counter decreases correctly

#### **US-CART-004: View Cart**
**Acceptance Criteria:**
- [ ] All items are displayed with complete information
- [ ] Individual and total prices are shown
- [ ] Quantities are displayed correctly
- [ ] Product icons are visible

#### **US-CART-005: Real-Time Total**
**Acceptance Criteria:**
- [ ] Subtotal is calculated correctly
- [ ] Discounts are applied and displayed
- [ ] Final total is updated automatically
- [ ] Calculations are mathematically accurate

#### **US-CART-006: Empty Cart**
**Acceptance Criteria:**
- [ ] Clear message is displayed when cart is empty
- [ ] "Add Products" button is available
- [ ] User is guided on next steps
- [ ] Navigation to other pages works

### **7.2 Coupon System User Stories**

#### **US-COUPON-001: Apply Coupons**
**Acceptance Criteria:**
- [ ] Field to enter coupon code is available
- [ ] Valid coupons are accepted and applied
- [ ] Discount is calculated and applied correctly
- [ ] Cart total is updated

#### **US-COUPON-002: Remove Coupons**
**Acceptance Criteria:**
- [ ] "Remove" button is visible for applied coupons
- [ ] Clicking remove removes the coupon
- [ ] Discount is removed from total
- [ ] Coupon field is cleared

#### **US-COUPON-003: Validate Coupons**
**Acceptance Criteria:**
- [ ] Invalid coupons show clear error message
- [ ] Minimum value rules are validated
- [ ] Tips are provided for invalid coupons
- [ ] Button to view promotions is available

### **7.3 Promotion System User Stories**

#### **US-PROMO-001: Automatic Discounts**
**Acceptance Criteria:**
- [ ] Promotions are applied automatically
- [ ] Discounts appear in cart summary
- [ ] Total is updated with promotions
- [ ] Higher value promotions have priority

#### **US-PROMO-002: Discount Types**
**Acceptance Criteria:**
- [ ] Percentage discounts are calculated correctly
- [ ] Fixed amount discounts are applied correctly
- [ ] Discount types are clearly identified
- [ ] Calculations are accurate

#### **US-PROMO-003: Promotion Rules**
**Acceptance Criteria:**
- [ ] Minimum values are respected
- [ ] Promotions within deadline are applied
- [ ] Expired promotions are not applied
- [ ] Rules are consistent

### **7.4 User Interface User Stories**

#### **US-UI-001: Responsive Design**
**Acceptance Criteria:**
- [ ] Interface works on desktop (1200px+)
- [ ] Interface works on tablet (768px-1199px)
- [ ] Interface works on mobile (320px-767px)
- [ ] Navigation is functional on all devices

#### **US-UI-002: Complete Purchase**
**Acceptance Criteria:**
- [ ] Checkout button is visible when there are items
- [ ] Checkout process is clear and intuitive
- [ ] Order summary is displayed
- [ ] Success confirmation is provided

### **7.5 Administrative User Stories**

#### **US-ADMIN-001: Create Promotions**
**Acceptance Criteria:**
- [ ] Creation form is available
- [ ] All required fields are validated
- [ ] Promotion is created successfully
- [ ] New promotion appears in active list

---

## 📝 **8. APPROVALS**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| **Test Manager** | Camila Monteiro | _________________ | 08/23/2024 |
| **Test Designer** | Camila Monteiro | _________________ | _________________ |

---

## 📚 **9. REFERENCES**

- **ISO 29119-3**: Software and systems engineering - Software testing - Part 3: Test documentation
- **User Stories**: Agile methodology for requirements definition
- **Acceptance Criteria**: Validation criteria for each User Story
- **Behavior-Driven Development**: Approach for behavior-based testing

---

## 📋 **10. APPENDICES**

### **A. Glossary of Terms**
- **User Story**: Description of functionality from user perspective
- **Acceptance Criteria**: Conditions that must be met to accept a User Story
- **US-XX**: User Story identifiers
- **BDD**: Behavior-Driven Development

### **B. Revision History**
- **v2.0**: User Stories and ISO 29119-3 implementation
- **v2.1**: Final adjustments and reviews
---

## 🎯 **Executive Summary**

This Test Plan establishes an innovative approach combining **User Stories** with the **ISO 29119-3** standard, ensuring that tests are focused on end users and validation of clear acceptance criteria. The plan covers 15 User Stories with 59 test cases, providing complete coverage of QACommerce functionalities through real usage scenarios.

**Status: ✅ APPROVED**  
**Next step: Execute tests based on User Stories**
