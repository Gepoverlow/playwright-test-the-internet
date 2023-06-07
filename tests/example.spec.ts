import { test } from '@playwright/test';
import { TheInternetPage }  from '../page-objects/TheInternetPage';
import { AddRemoveElementsPage } from '../page-objects/AddRemoveElementsPage';

test('Verify A/B Testing works', async ({ page }) => {

  const theInternetPage = new TheInternetPage(page)

  //Given
  await theInternetPage.goto()

  //When
  await theInternetPage.clickAbTestingLink()
  
  //Then
  await theInternetPage.verifyAbTestingPage()
  
})

test('Verify Add Elements works', async ({ page }) => {

  const addRemoveElementsPage = new AddRemoveElementsPage(page)

  //Given
  await addRemoveElementsPage.goto()

  //When
  await addRemoveElementsPage.clickButtonAddElement()

  //Then
  await addRemoveElementsPage.verifyAddElements()

})

test('Verify Remove Elements works', async ({ page }) => {

  const addRemoveElementsPage = new AddRemoveElementsPage(page)

  //Given
  await addRemoveElementsPage.goto()
  await addRemoveElementsPage.clickButtonAddElement()

  //When
  await addRemoveElementsPage.clickButtonRemoveElement()
  
  //Then
  await addRemoveElementsPage.verifyRemoveElements()

})

test('Verify Basic Auth works', async({ page }) => {

  const theInternetPage = new TheInternetPage(page)
  page.on('dialog', async dialog => {

    await dialog.accept('admin')

  })

  //Given
  await theInternetPage.goto()
  await theInternetPage.clickBasicAuthLink()

  //When

  //Then
  await theInternetPage.verifyBasicAuthPage()

})
