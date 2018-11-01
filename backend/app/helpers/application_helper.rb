module ApplicationHelper
  def ng_pagination total_items, current_page, items_per_page, event_handler
    "<ul uib-pagination
      ng-if=#{total_items}
      total-items=#{total_items}
      ng-model=#{current_page}
      max-size='5'
      items-per-page=#{items_per_page}
      class='pagination-sm'
      boundary-links='true'
      rotate='false'
      ng-change=#{event_handler}
      first-text='<<'
      last-text='>>'
      next-text='>'
      previous-text='<'
      >
    </ul>".html_safe
  end
end
