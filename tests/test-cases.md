# 📋 Test Cases  

This document contains the detailed test cases derived from the user stories and acceptance criteria defined in the **Test Plan**.  
Each test case includes preconditions, test steps, expected results and space for actual results after execution.  

---

## **Test Cases**

### **TC001 - Login with valid credentials**
- **Preconditions:** User account exists.  
- **Steps:**  
  1. Go to the login page.  
  2. Enter a valid email.  
  3. Enter a valid password.  
  4. Click **Login**.  
- **Expected Result:** User is redirected to the dashboard.  
- **Priority:** High  
- **Status:** Not Executed  
- **Actual Result:**  

---

### **TC002 - Login with invalid password**
- **Preconditions:** User account exists.  
- **Steps:**  
  1. Go to the login page.  
  2. Enter a valid email.  
  3. Enter a wrong password.  
  4. Click **Login**.  
- **Expected Result:** Error message is displayed.  
- **Priority:** High  
- **Status:** Not Executed  
- **Actual Result:**  

---

### **TC003 - Login with unregistered email**
- **Preconditions:** None.  
- **Steps:**  
  1. Go to the login page.  
  2. Enter an unregistered email.  
  3. Enter any password.  
  4. Click **Login**.  
- **Expected Result:** Error message is displayed.  
- **Priority:** Medium  
- **Status:** Not Executed  
- **Actual Result:**  

---

### **TC004 - Login with empty fields**
- **Preconditions:** None.  
- **Steps:**  
  1. Go to the login page.  
  2. Leave both fields empty.  
  3. Click **Login**.  
- **Expected Result:** Required field validation messages are shown.  
- **Priority:** Medium  
- **Status:** Not Executed  
- **Actual Result:**  
