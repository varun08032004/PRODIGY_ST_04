# PRODIGY_ST_04 – Cross-Browser Testing with BrowserStack

## 📌 Task Description

This project focuses on performing cross-browser testing of a login or form submission page using BrowserStack’s Selenium Grid. The objective is to verify consistent and reliable functionality across various browsers and devices. You will automate login test cases and execute them on BrowserStack to ensure compatibility.

**Demo site for testing:** [https://www.saucedemo.com/](https://www.saucedemo.com/)

---

## ✅ Test Scenarios

### Positive Test Cases

TC01: Login with valid credentials  
- Steps:  
  1. Go to https://www.saucedemo.com/  
  2. Enter username: standard_user  
  3. Enter password: secret_sauce  
  4. Click Login  
- Expected Result: Login successful, user redirected to inventory page

---

### Negative Test Cases

TC02: Login with invalid credentials  
- Steps:  
  1. Go to https://www.saucedemo.com/  
  2. Enter an invalid username  
  3. Enter a valid password  
  4. Click Login  
- Expected Result: Login fails, error message displayed

---

TC03: Empty username and password  
- Steps:  
  1. Leave both fields blank  
  2. Click Login  
- Expected Result: Validation error displayed

---

### Cross-Browser Matrix

✅ Chrome  
✅ Firefox  
✅ Safari  
✅ Edge  

---

## 📁 Files Included

| File Name | Description |
|----------------------------|------------------------------------------------------------------|
| `browserstack_login_test.js` | Selenium test script to execute automated login scenarios on BrowserStack |
| `CrossBrowser_Issues.md` | Notes on issues or inconsistencies found during testing on various browsers |
| `README.md` | This file – overview, instructions, and test documentation |

---

## ✅ How to Use

1. Sign up for a free account on [BrowserStack](https://www.browserstack.com/)  
2. Note your BrowserStack username and access key  
3. Clone or download this repository  
4. Install dependencies:

```bash
npm install selenium-webdriver
npm install browserstack-local
