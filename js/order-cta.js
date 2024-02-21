const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
const orderFormModal = document.querySelector('.order-form-modal')
const orderFormOverlay = document.querySelector('.overlay')

function openOrderForm() {
  orderFormModal.classList.add('is-open')
  orderFormOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderForm)

function closeOrderForm() {
  orderFormModal.classList.remove('is-open')
  orderFormOverlay.classList.remove('is-active')
}

orderFormOverlay.addEventListener('click', closeOrderForm)