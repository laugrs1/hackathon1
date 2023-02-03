import { test, expect } from "@playwright/test";
test("test", async ({ page, context }) => {
  await context.addCookies([
    {
      name: "upperbound",
      value: "1000.00",
      domain: "www.mathster.com",
      path: "/",
    },
  ]);
  await context.addCookies([
    {
      name: "mul",
      value: "true",
      domain: "www.mathster.com",
      path: "/",
    },
  ]);
  await context.addCookies([
    {
      name: "div",
      value: "true",
      domain: "www.mathster.com",
      path: "/",
    },
  ]);
  await context.addCookies([
    {
      name: "sqrt",
      value: "true",
      domain: "www.mathster.com",
      path: "/",
    },
  ]);
  await context.addCookies([
    {
      name: "pow",
      value: "true",
      domain: "www.mathster.com",
      path: "/",
    },
  ]);
  await context.addCookies([
    {
      name: "sub",
      value: "true",
      domain: "www.mathster.com",
      path: "/",
    },
  ]);
  let numbers,
    answer,
    power,
    value,
    result = false;
  await page.goto("https://www.mathster.com/10secondsmaths/");
  while (await page.locator("#time-box").isVisible()) {
    const question = await page.innerText("#question");
    console.log(question);
    if (question.includes("+")) {
      numbers = question.split(" ");
      answer = parseInt(numbers[0]) + parseInt(numbers[2]);
      console.log(answer);
      await page.locator("#question-answer").type(String(answer));
    } else if (question.includes("-")) {
      numbers = question.split(" ");
      console.log(numbers);
      answer = parseInt(numbers[0]) - parseInt(numbers[2]);
      console.log(answer);
      await page.locator("#question-answer").type(String(answer));
    } else if (question.includes("×")) {
      numbers = question.split(" ");
      console.log(numbers);
      answer = parseInt(numbers[0]) * parseInt(numbers[2]);
      console.log(answer);
      await page.locator("#question-answer").type(String(answer));
    } else if (question.includes("÷")) {
      numbers = question.split(" ");
      console.log(numbers);
      answer = parseInt(numbers[0]) / parseInt(numbers[2]);
      console.log(answer);
      await page.locator("#question-answer").type(String(answer));
    } else if (question.includes("√")) {
      numbers = question.split("√");
      console.log(numbers);
      answer = Math.sqrt(numbers[1]);
      console.log(answer);
      await page.locator("#question-answer").type(String(answer));
    } else {
      numbers = question.substring(0, question.length - 1);
      console.log(numbers);
      power = question.substring(question.length - 1, question.length);
      switch (power) {
        case "³":
          value = 3;
          break;
        case "²":
          value = 2;
          break;
      }
      answer = Math.pow(parseInt(numbers), value);
      console.log(power);
      console.log(answer);
      await page.locator("#question-answer").type(String(answer));
    }
    if (await page.locator("#submit-answer").isVisible()) {
      await page.locator("#submit-answer").click();
    }
  }
  console.log("Score:" + (await page.innerText("#results .score")));
});
