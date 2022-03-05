@component('mail::message')
# Introduction

Your profile has been recieveed Thnka you and have anice day.

@component('mail::button', ['url' => ''])
Show my data.
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
