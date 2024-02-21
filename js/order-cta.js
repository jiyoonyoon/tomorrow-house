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

function toggleOderCtaBookmark() {
  const [icon, countSpen] = this.children
  const count = Number(countSpen.innerHTML.replaceAll(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    icon.setAttribute('class', 'ic-bookmark')
    newCount = newCount - 1
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled')
    newCount = newCount + 1
  }

  countSpen.innerHTML = newCount.toLocaleString()
  countSpen.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)

  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOderCtaBookmark)