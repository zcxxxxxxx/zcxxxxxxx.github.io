"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>b});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var c=a.createContext({}),s=function(n){var e=a.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=s(n.components);return a.createElement(c.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,c=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),m=s(t),d=r,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(b,i(i({ref:e},p),{},{components:t})):a.createElement(b,i({ref:e},p))}));function b(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=n,o[m]="string"==typeof n?n:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3305:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:2},i="\u4f8b\u5b50",o={unversionedId:"JAVA_review",id:"JAVA_review",title:"\u4f8b\u5b50",description:"1. Java\u6807\u8bc6\u7b26\uff1a",source:"@site/docs/JAVA_review.md",sourceDirName:".",slug:"/JAVA_review",permalink:"/docs/JAVA_review",draft:!1,editUrl:"https://github.com/zcxxxxxxx/zcxxxxxxx.github.io/docs/JAVA_review.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6982\u5ff5",permalink:"/docs/review"}},c={},s=[],p={toc:s};function m(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Java\u6807\u8bc6\u7b26\uff1a")),(0,r.kt)("p",null,"Java \u6807\u8bc6\u7b26\u7531\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u7f8e\u5143\u7b26\u53f7($)\u548c\u4e0b\u5212\u7ebf(","_",")\u6784\u6210\uff0c\u4f46\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u5934\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"int number1;    // \u6b63\u786e\u7684\u6807\u8bc6\u7b26\nString $name;   // \u6b63\u786e\u7684\u6807\u8bc6\u7b26\n// int 123abc;  // \u9519\u8bef\u7684\u6807\u8bc6\u7b26\uff0c\u4e0d\u80fd\u4ee5\u6570\u5b57\u5f00\u59cb\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u5c01\u88c5\u3001\u7ee7\u627f\u548c\u591a\u6001\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u5c01\u88c5\npublic class Animal {\n  private String name;\n\n  public String getName() {\n    return name;\n  }\n\n  public void setName(String name) {\n    this.name = name;\n  }\n}\n\n// \u7ee7\u627f\npublic class Dog extends Animal {\n  public void bark() {\n    System.out.println("Bark!");\n  }\n}\n\n// \u591a\u6001\nAnimal animal = new Dog();  // Dog \u5bf9\u8c61\u88ab\u5f53\u4f5c Animal \u5bf9\u8c61\u4f7f\u7528\nanimal.setName("Rover");  // \u53ef\u4ee5\u4f7f\u7528 Animal \u7c7b\u7684\u65b9\u6cd5\n// animal.bark();  // \u9519\u8bef\uff0c\u56e0\u4e3a bark \u65b9\u6cd5\u4e0d\u5728 Animal \u7c7b\u4e2d\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u7c7b\u7684\u6784\u9020\u65b9\u6cd5\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Animal {\n  private String name;\n\n  public Animal(String name) {  // \u6784\u9020\u51fd\u6570\n    this.name = name;\n  }\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5305\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u6587\u4ef6\u8def\u5f84\uff1acom/myapp/Main.java\npackage com.myapp;\n\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}\n')),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u5173\u952e\u5b57\u5bfc\u5165\u5e76\u4f7f\u7528\u5176\u4ed6\u5305\u4e2d\u7684\u7c7b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.myapp.Main;  // \u5bfc\u5165 Main \u7c7b\n\nMain main = new Main();  // \u4f7f\u7528 Main \u7c7b\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u7c7b\u578b\u5f3a\u5236\u8f6c\u6362\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"double d = 3.14;\nint i = (int) d;  // \u5c06 d \u5f3a\u5236\u8f6c\u6362\u4e3a int\uff0ci \u7684\u503c\u73b0\u5728\u662f 3\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u91cd\u8f7d\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Main {\n\n  // \u7b2c\u4e00\u4e2a add \u65b9\u6cd5\uff0c\u63a5\u6536\u4e24\u4e2a int \u53c2\u6570\n  public int add(int a, int b) {\n    return a + b;\n  }\n\n  // \u7b2c\u4e8c\u4e2a add \u65b9\u6cd5\uff0c\u63a5\u6536\u4e24\u4e2a double \u53c2\u6570\n  public double add(double a, double b) {\n    return a + b;\n  }\n}\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"super")," \u5173\u952e\u5b57\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Animal {\n  public void eat() {\n    System.out.println("Animal is eating...");\n  }\n}\n\npublic class Dog extends Animal {\n  public void eat() {\n    super.eat();  // \u8c03\u7528\u7236\u7c7b\u7684 eat \u65b9\u6cd5\n    System.out.println("Dog is eating...");\n  }\n}\n')),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"\u62bd\u8c61\u7c7b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public abstract class Animal {\n  public abstract void sound();  // \u62bd\u8c61\u65b9\u6cd5\n\n  public void eat() {\n    System.out.println("The animal eats...");\n  }\n}\n\npublic class Dog extends Animal {\n  public void sound() {  // \u5fc5\u987b\u5b9e\u73b0\u7236\u7c7b\u7684\u62bd\u8c61\u65b9\u6cd5\n    System.out.println("The dog says: woof woof");\n  }\n}\n')),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"\u63a5\u53e3\u56de\u8c03\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface Callback {\n  void callback(int param);\n}\n\npublic class Client implements Callback {\n  public void callback(int p) {\n    System.out.println("callback called with " + p);\n  }\n}\n\npublic class Test {\n  public static void main(String args[]) {\n    Callback c = new Client();\n    c.callback(42);\n  }\n}\n')),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"JDBC \u548c\u4e8b\u52a1\u5904\u7406\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import java.sql.*;\n\npublic class JdbcTransactionExample {\n  public static void main(String args[]) {\n    Connection conn = null;\n    Statement stmt = null;\n\n    try {\n      // \u6ce8\u518c JDBC \u9a71\u52a8\n      Class.forName("com.mysql.jdbc.Driver");\n\n      // \u6253\u5f00\u8fde\u63a5\n      conn = DriverManager.getConnection("jdbc:mysql://localhost/EMP", "username", "password");\n\n      // \u5173\u95ed\u81ea\u52a8\u63d0\u4ea4\n      conn.setAutoCommit(false);\n      System.out.println("Successfully connected...");\n\n      // \u6267\u884c\u64cd\u4f5c\n      stmt = conn.createStatement();\n      String SQL = "INSERT INTO Employees (id, first, last, age) " +\n                   "VALUES (100, \'Zia\', \'Ali\', 30)";\n      stmt.executeUpdate(SQL);\n\n      // \u63d0\u4ea4\u4e8b\u52a1\n      conn.commit();\n      System.out.println("Inserted records into the table...");\n\n    } catch (Exception e) {\n      // \u5904\u7406\u9519\u8bef\n      e.printStackTrace();\n\n      // \u5982\u679c\u53d1\u751f\u9519\u8bef\uff0c\u56de\u6eda\u4e8b\u52a1\n      try {\n        if (conn != null) {\n          conn.rollback();\n        }\n      } catch (SQLException se2) {\n        se2.printStackTrace();\n      }\n    } finally {\n      // \u6700\u540e\uff0c\u5173\u95ed\u8d44\u6e90\n      try {\n        if (stmt != null) {\n          stmt.close();\n        }\n      } catch (SQLException se2) {\n      }\n      try {\n        if (conn != null) {\n          conn.close();\n        }\n      } catch (SQLException se) {\n        se.printStackTrace();\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b80\u5316\u7684\u4f8b\u5b50\uff0c\u7528\u4e8e\u6f14\u793a JDBC \u548c\u4e8b\u52a1\u5904\u7406\u3002\u5728\u5b9e\u9645\u7684\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u60a8\u9700\u8981\u8fdb\u884c\u9002\u5f53\u7684\u9519\u8bef\u5904\u7406\uff0c\u5e76\u4e14\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u8fde\u63a5\u6c60\u3001\u9884\u5904\u7406\u8bed\u53e5\u7b49\u6280\u672f\u3002"),(0,r.kt)("p",null,"\u5e0c\u671b\u8fd9\u4e9b\u4f8b\u5b50\u6709\u52a9\u4e8e\u60a8\u7406\u89e3\u8fd9\u4e9b\u6982\u5ff5\u3002\u5982\u679c\u60a8\u5bf9\u4efb\u4f55\u6982\u5ff5\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u6216\u8005\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u4f8b\u5b50\uff0c\u8bf7\u544a\u8bc9\u6211\u3002"))}m.isMDXComponent=!0}}]);