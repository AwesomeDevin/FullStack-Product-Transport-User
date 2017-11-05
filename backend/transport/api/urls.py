from django.conf.urls import include, url
import views

urlpatterns = [

    url(r'^transport/user/register_user/$',views.api_register_user),
    url(r'^transport/user/update_userinfo_user/$',views.api_update_userinfo_user),

    url(r'^transport/user/insert_order/$',views.api_insert_order),
    url(r'^transport/user/get_all_order/$',views.api_get_all_order),

]