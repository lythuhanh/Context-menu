import { Selector } from 'testcafe';

const menu = Selector('#box2')
const copy = Selector('i[class="fa fa-copy site-cm-icon"]')


fixture`New Fixture`
    .page`https://www.jquery-az.com/jquery/demo.php?ex=121.0_1`

test.only('Popup Menu', async t => {
    await t
        .maximizeWindow()
        .wait(3000)
        .expect(menu.exists).ok()
        .rightClick(menu)
        .wait(2000)
        .click(copy)
        
            
});