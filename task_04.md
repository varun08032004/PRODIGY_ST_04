# 🧪 Cross-Browser and Cross-Device Testing Report

## 🔗 Website Under Test
[https://www.saucedemo.com/](https://www.saucedemo.com/)

---

## ✅ Test Summary

| Test Parameter     | Values Tested                                                                           |
|--------------------|-----------------------------------------------------------------------------------------|
| Browsers           | Google Chrome (v125), Mozilla Firefox (v126), Microsoft Edge (v125), Safari (iOS 17)    |
| Devices            | Desktop (1920×1080), Tablet (768×1024), Mobile (360×800)                                |
| Operating Systems  | Windows 11, macOS Ventura, Android 13, iOS 17                                           |
| Testing Tools Used | Selenium WebDriver via BrowserStack, plus manual inspection with DevTools               |

---

## 🔍 Test Scenarios & Observations

### 1. **Login Functionality (Valid Credentials)**

| Device     | Browser      | Status         | Issues Found                                                              |
|------------|--------------|----------------|---------------------------------------------------------------------------|
| Desktop    | All          | ✅ OK          | Login successful, redirected to inventory page                            |
| Mobile     | Safari       | ⚠️ Minor Issue | Login button slightly clipped on very small iPhone SE screens             |
| Tablet     | Firefox      | ✅ OK          | Login flow consistent                                                     |
| Mobile     | Chrome       | ✅ OK          | Login fields responsive, flow works well                                  |

---

### 2. **Invalid Login Handling**

| Device     | Browser      | Status         | Issues Found                                                              |
|------------|--------------|----------------|---------------------------------------------------------------------------|
| All        | Chrome/Edge  | ✅ OK          | Error messages show properly on wrong credentials                         |
| Mobile     | Safari       | ⚠️ Minor Issue | Error message text overflows on narrow screen                             |
| Tablet     | Firefox      | ✅ OK          | Consistent error handling                                                 |

---

### 3. **Empty Fields Validation**

| Device     | Browser      | Status         | Issues Found                                                              |
|------------|--------------|----------------|---------------------------------------------------------------------------|
| All        | All          | ✅ OK          | Shows error when blank fields submitted                                    |
| Mobile     | Safari       | ⚠️ Minor Issue | Error text partially hidden if zoomed                                      |

---

### 4. **Responsive Layout Check**

| Device     | Browser      | Status         | Issues Found                                                              |
|------------|--------------|----------------|---------------------------------------------------------------------------|
| Desktop    | All          | ✅ OK          | Consistent UI                                                             |
| Tablet     | Chrome       | ✅ OK          | Buttons scaled well                                                       |
| Mobile     | Safari       | ⚠️ Minor Issue | Some overlapping text on smaller iPhones                                   |
| Mobile     | Firefox      | ✅ OK          | Responsive layout correct                                                 |

---

## 🧾 Summary of Issues Found

| Severity | Issue Description                                             | Affected Browser(s)/Device(s)   | Recommended Fix                                   |
|----------|---------------------------------------------------------------|---------------------------------|---------------------------------------------------|
| Medium   | Login button clipped on very small screens                   | Safari on iPhone SE             | Improve responsive CSS, add `flex-wrap`           |
| Medium   | Error message text overflows                                  | Safari on narrow screens        | Use `word-wrap: break-word` or smaller font       |
| Low      | Error text hidden on zoom                                     | Mobile Safari                   | Add more spacing below fields                     |
| Low      | Minor text overlap in extremely small screen widths           | Mobile Safari                   | Add media queries for breakpoints                 |

---

## ✅ Recommendations

- Improve **responsive CSS** especially for iOS Safari devices  
- Add thorough regression checks on smallest iPhones  
- Test using BrowserStack’s physical device cloud regularly  
- Include WCAG accessibility checks for better error messaging  
- Document breakpoints for all supported devices  

---

## 🧑‍💻 Tester Info

- **Name:** Varun Girish Deshmukh  
- **Internship Track:** Software Testing  
- **Task Number:** 04  
- **Internship Program:** Prodigy InfoTech

---

## 🌐 Repository Link

> [GitHub Repo](https://github.com/varun08032004/PRODIGY_ST_04)

