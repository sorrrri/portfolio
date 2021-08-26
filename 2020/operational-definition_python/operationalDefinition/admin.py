from django.contrib import admin

from .models import OperationalDefinition, Category, ICDCode, EDICode, VaccineCode


class OperationalDefinitionAdmin(admin.ModelAdmin):
    list_display = ['description']
    list_filter = ['created', 'updated']
    search_fields = ['name', 'created']
    ordering = ['-updated', '-created']


class CategoryAdmin(admin.ModelAdmin):
    pass


class ICDCodeAdmin(admin.ModelAdmin):
    pass

class EDICodeAdmin(admin.ModelAdmin):
    pass

class VaccineCodeAdmin(admin.ModelAdmin):
    pass


admin.site.register(OperationalDefinition, OperationalDefinitionAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(ICDCode, ICDCodeAdmin)
admin.site.register(EDICode, EDICodeAdmin)
admin.site.register(VaccineCode, VaccineCodeAdmin)

