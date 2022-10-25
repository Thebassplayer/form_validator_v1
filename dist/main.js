(()=>{"use strict";function e(e){e.closest(".form-control").className="form-control success"}function t(e,t){const a=e.closest(".form-control");a.className="form-control error",a.querySelector("small").innerText=t}function a(e){return e.id.charAt(0).toUpperCase().concat(e.id.slice(1))}const n=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;function s(e){"password"===e.type?e.type="text":e.type="password"}const o=document.getElementById("form"),r=document.getElementById("username"),c=document.getElementById("email"),l=document.getElementById("password"),u=document.getElementById("password2"),i=document.getElementById("show-hide-password-btn"),m=document.getElementById("visibility-icon");o.addEventListener("submit",(function(s){var o,i;s.preventDefault(),""===(o=u).value.trim()?t(o,"Password confirmation is required"):e(o),function(n,s,o){n.value.length<=3?t(n,`${a(n)} must be at least 3 characters`):n.value.length>=15?t(n,`${a(n)} must be less than 15 characters`):e(n)}(r),function(s,o){n.test(s.value)?e(s):t(s,`${a(s)} must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)`)}(l),function(a){/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(String(a.value).trim().toLocaleLowerCase())?e(a):t(a,"Email is not valid")}(c),i=u,l.value!==i.value&&t(i,"Passwords do not match")})),i.addEventListener("click",(e=>{e.preventDefault(),s(l),s(u),function(e,t,a){let n=e.className;e.className=n===t?"fa-regular fa-eye-slash":t}(m,"fa-regular fa-eye")}))})();