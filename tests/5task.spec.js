// https://www.youtube.com/, https://ttsreader.com/

import { test, expect } from '@playwright/test';

test('test song', async ({ context }) => {

    const page = await context.newPage();

    await page.goto('https://soundcloud.com/millenniummaximillian/mama-mia-instrumental-synth-cover');
    await page.getByRole('button', { name: 'I Accept' }).click();

    const page2 = await context.newPage();

    //navigate to ttsrreader
    await page2.goto('https://ttsreader.com');
    await page2.locator('#select_language').selectOption('Samantha');
    await page2.locator('#select_speed').selectOption('1.2');

    await page2.getByPlaceholder('Write something in this box and click play.\nOur text-to-speech will read it out loud for you.\nYou can also drag files to here and edit the text.\n\nGo ahead, enjoy listening to any written content :)').click();
    await page2.getByPlaceholder('Write something in this box and click play.\nOur text-to-speech will read it out loud for you.\nYou can also drag files to here and edit the text.\n\nGo ahead, enjoy listening to any written content :)').fill('Oh...you touch my tra la la\n' +
        'Mmm...my ding ding dong\n' +
        '(Mmm!)\n' +
        'La\n' +
        'La la la la la la\n' +
        'Oh...you touch my tra la la\n' +
        'La\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la la la la\n' +
        '*******\n' +
        'Yo, listen up  ** here\'s a story About a little guy That lives in a blue world\n' +
        '**\n' +
        'And all day and all night\n' +
        'And everything he sees is just blue\n' +
        'Like him inside and outside\n' +
        '***\n' +
        'Blue his house \n' +
        'With a blue little window And a blue corvette\n' +
        'And everything is blue for him\n' +
        'And himself and everybody around\n' +
        'Cause he ain\'t got nobody to listen to\n' +
        '\n' +
        '***\n' +
        'I\'m looking for some fun\n' +
        'Deep in the night\n' +
        'I\'m looking for some love\n' +
        'Deep in the night\n' +
        'I\'m looking for some fun\n' +
        'Deep in the night\n' +
        'I\'m looking for some...\n' +
        'You tease me\n' +
        'Oh, please me\n' +
        'I want you to be my love toy\n' +
        'Come near me\n' +
        'Don\'t fear me\n' +
        'I just can\'t get enough of you, boy\n' +
        'Oh...you touch my tra la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Oh...you touch my tra la la)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong) (My ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'Deep in the night\n' +
        'I\'m looking for some fun\n' +
        'Deep in the night\n' +
        'I\'m looking for some love\n' +
        'You tease me\n' +
        'Oh, please me\n' +
        'I want you to be my love toy\n' +
        'Come near me\n' +
        'Don\'t fear me\n' +
        'I just can\'t get enough of you, boy\n' +
        'Oh...you touch my tra la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Oh...you touch my tra la la)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'Mmm...my ding ding dong\n' +
        'La la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'Oh...you touch my tra la la\n' +
        'La\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Oh...you touch my tra la la)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong) (My ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Oh...you touch my tra la la)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm...my ding ding dong)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Oh...you touch my tra la la)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'La (Mmm!)\n' +
        'La la la\n' +
        'La la la\n' +
        'La la la la la la\n' +
        'Oh...you touch my tra la la\n' +
        'Mmm...my ding ding dong');


    await page2.getByRole('button', { name: 'Play / Pause' }).click();
    await page2.waitForSelector('.glyphicon-play', { state: 'visible', timeout: 100000 });

});